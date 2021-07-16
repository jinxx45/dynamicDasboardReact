import React from 'react'

import './UserCard.css'

function UserCard(props) {
    return (
        <div className="user-card mx-4">
            <h3>{props.username}</h3>
            <p className="my-3">{props.role}</p>
            <p>
            {(() => {

  

switch (props.permission) {

   case 'l5':

       return (

         <div>Create , Delete , Edit , View , Download </div>

       )

   case 'l4':

       return (

         <div>Create , Edit , View , Download</div>

       )

       
   case 'l3':

    return (

      <div> Edit , View , Download</div>

    )

          
   case 'l2':

    return (

      <div>  View , Download</div>

    )


    case 'l1':

        return (
    
          <div>View</div>
    
        )


    




   default:

       return (

         <div>You are a User.</div>

       )

}



})()}
            </p>

        </div>
    )
}

export default UserCard
