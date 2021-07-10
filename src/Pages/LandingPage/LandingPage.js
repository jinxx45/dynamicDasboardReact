import React from 'react'

import SideBar from '../../Components/LandingPage/SideBar/SideBar'
import MainBar from '../../Components/LandingPage/MainBar/MainBar'




function LandingPage() {
    return (
        <div>
            <div className="row">
                <div className="col-md-5">
                    <SideBar/>
                </div>
                <div className="col-md-7">
                    <MainBar/>
                </div>
            </div>
            
        </div>
    )
}

export default LandingPage

