import React from 'react'
import axios from 'axios'




import './MainBar.css'
import { useHistory } from 'react-router-dom';


function MainBar() {
    const history = useHistory();
    const email = React.useRef();
    const password = React.useRef();

    const handleSubmit = e =>
    {
        e.preventDefault();
        const data = {
            email : email.current.value,
            password : password.current.value

        }

        axios.post('authenticate',data).then(

        res => {
          console.log(res)
          localStorage.setItem('token',res.data.token)
          if(res.data.userType === 'admin')
          {
              history.push('/dashboard-admin')
          }
          else
            {
                history.push('/dasboard')
            }
          
         
        }
            
              
   
        ).catch(
            err => {
                console.log(err);
                console.log("Check the Username and Password");
            }
        )

    }

    return (
        <>
            <div className="mainbar col-md-7  py-3 d-flex align-items-center flex-column justify-content-center">
                <h1>Welcome to <span className="text-muted"> Dynamic</span><span className="text-danger">Dash</span></h1>
                <p className="text-muted my-2">Analyse your Key Performance Indicators (KPI's)</p>
                
                {/* Login Form */}

                <form className="LoginForm" onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input ref={email} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input ref={password} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Keep me Signed in</label>
                </div>
                <button type="submit" class="btn btn-info">Sign In</button>
                </form>
                
                
            </div>
            
        </>
    )
}

export default MainBar
