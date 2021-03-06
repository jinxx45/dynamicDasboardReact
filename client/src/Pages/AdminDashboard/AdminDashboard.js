import axios from 'axios'
import React, { Component } from 'react'

import './AdminDashboard.css'
import SideBar from '../../Components/AdminDashboardPage/Sidebar/SideBar';

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
    
                <SideBar username = {this.state.user.userName}/>

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

