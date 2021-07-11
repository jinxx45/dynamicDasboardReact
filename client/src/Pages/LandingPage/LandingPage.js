import React from 'react'

import SideBar from '../../Components/LandingPage/SideBar/SideBar'
import MainBar from '../../Components/LandingPage/MainBar/MainBar'




function LandingPage() {
    return (
        <div> 
            <div className="row">
                <SideBar/>
                <MainBar/> 
            </div>     
            
        </div>
    )
}

export default LandingPage

