import React from 'react'

import SideBar from '../../Components/AdminDashboardPage/Sidebar/SideBar'
import MainBar from '../../Components/UserManagement/MainBar/UserMain'

import axios from 'axios'

import  { Component } from 'react'

export default class UserManagement extends Component {
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
                <MainBar />

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
