import React from 'react'

import './UserMain.css'

import UserCard from './UserCards/UserCard'
import Modal from './UserCards/AddUserModal/modal'


function UserMain() {
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
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            </div>
            

            
        </div>
    )
}

export default UserMain
