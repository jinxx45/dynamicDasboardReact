var User = require('../models/user')

var jwt = require('jwt-simple')

var config = require('../config/dbconfig')

var functions=
{
    addNew : function(req,res)
    {
        if(!(req.body.email) || !(req.body.password) || !(req.body.userType))
        {
            res.json({success : false , msg :'Enter all Fields'})
        }
        else
        {
            var newUser = User({
                email : req.body.email,
                password : req.body.password,
                userType : req.body.userType
            })

            newUser.save(function(err,newUser)
            {
                if(err)
                {
                    res.json({success : false , msg :'Failed to Save'})
                }
                else 
                {
                    res.json({success : true , msg :'Sucessfully Saved'})
                }
            })
        }
    },

    authenticate: function (req, res) {
        User.findOne({
            email: req.body.email
        }, function (err, user) {
                if (err) throw err
                if (!user) {
                    res.status(403).send({success: false, msg: 'Authentication Failed, User not found'})
                }

                else {
                    user.comparePassword(req.body.password, function (err, isMatch) {
                        if (isMatch && !err) {
                            var token = jwt.encode(user, config.secret)
                            
                            res.json({success: true, token: token , userType:user.userType })
                        }
                        else {
                            return res.status(403).send({success: false, msg: 'Authentication failed, wrong password'})
                        }
                    })
                }
        }
        )
    },

    getinfo: function (req, res) {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            var token = req.headers.authorization.split(' ')[1]
            var decodedtoken = jwt.decode(token, config.secret)
            return res.json({success: true, userName:  decodedtoken.userName})
        }
        else {
            return res.json({success: false, msg: 'No Headers'})
        }
    }
}







module.exports = functions;