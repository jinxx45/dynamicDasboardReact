
import './UserMain.css'

import UserCard from './UserCards/UserCard'
import Modal from './UserCards/AddUserModal/modal'

import axios from 'axios'

import React, { Component } from 'react'

export default class UserMain extends Component {

    state = {
        users:[]
    }

    componentDidMount = () =>
    {
        this.getusers();
    }

    getusers = () =>
    {
        axios.get('getusers').then(
            res => {
                const data = res.data;
                this.setState({users:data})
              
            }
        ).catch(
            err=> {
                console.log(err)
            }
        )
    }

  


    render() {
        return (
            
                    <div className="mainbar-user-management">
            <div className="nav-user-management d-flex">
                <h2 className="fw-bold ">Edit Permission and Roles</h2>
                {/* Search Bar */}
                <form action="" autocomplete="off">
                    <input className="search-users" type="text" placeholder="Search Users " />
                </form>
                    
                    <Modal/>
                    
              
                </div>
            
            <div className="user-cards">
                {
                   this.state.users.map(user=>(
                       <UserCard username = {user.userName} role={user.userType} permission={user.permission}   />
                   ))
                }
            </div>
            

            
        
            </div>
        )
    }
}
