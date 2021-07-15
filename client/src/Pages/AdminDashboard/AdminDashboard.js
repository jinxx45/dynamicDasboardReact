import axios from 'axios'
import React, { Component } from 'react'

import './AdminDashboard.css'

// import {Navbar,Container} from 'react-bootstrap'


export default class AdminDashboard extends Component {


  state={};
  

    componentDidMount()
    {
    
    
       axios.get('getinfo').then(
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

