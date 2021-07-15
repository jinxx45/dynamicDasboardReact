import React from 'react'

import './SideBar.css'

import BrandLogo from '../../../Images/DynamicDashLogo.png'

import AnalysisLogo from '../../../Images/AnalysisLogo.png'

// Google Fonts




function SideBar() {
    return (
        <>

            <div className="sidebar  col-md-5">
                <div className="nav d-flex ">
                    <img className="mx-2 p-1 my-2" src={BrandLogo} width={50} height={50} alt="CompanyLogo" />
                    <h3 className="brand-text py-3 text-muted" >Dynamic<span className="text-danger font-weight-bold">Dash</span></h3>
                </div>
                

                {/* Header Text */}

                <div className="header-text">
                    <h3 className="mx-5 h1 my-3">Create , View , Download <br  /> Edit <span className="font-weight-bold"> Dynamic Graphs</span>  </h3>
                </div>

                <img  className="analysis-logo  mx-4" src={AnalysisLogo} alt="" />
            </div>

           
        </>
    )
}

export default SideBar
