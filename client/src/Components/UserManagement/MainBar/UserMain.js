import React from 'react'

import './UserMain.css'

import UserCard from './UserCards/UserCard'

function UserMain() {
    return (
        <div className="mainbar-user-management">
            <h2 className="fw-bold ">Edit Permission and Roles</h2>
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
            </div>
            
        </div>
    )
}

export default UserMain
