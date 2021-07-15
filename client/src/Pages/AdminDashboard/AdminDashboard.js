import axios from 'axios'
import React, { Component } from 'react'
import {Navbar,Container} from 'react-bootstrap'

export default class AdminDashboard extends Component {


  state={};
  

    componentDidMount()
    {
        const config =  {
            headers:{
                authorization:'Bearer ' + localStorage.getItem('token')
            }
        }
    
       axios.get('getinfo',config).then(
           res =>{
               
            this.setState(
                {
                    user : res.data
                }
            )
           },
           err =>(console.log(err))
       );
   }



    render() {
     
        if(this.state.user)
        {
            return (
                <>
                    <Navbar bg="danger">
                        <Container>
                        <Navbar.Brand href="#home">Welcome {this.state.user.userName} </Navbar.Brand>
                        </Container>
                    </Navbar>
                
                </>
            )
        }

        return (
            <div>
                Please Sign In !
            </div>
        )
       
    }
}

