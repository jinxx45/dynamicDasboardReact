import React from 'react'

import { Form , Button } from 'react-bootstrap'

import './MainBar.css'

function MainBar() {
    return (
        <>
            <div className="mainbar col-md-7  py-3 d-flex align-items-center flex-column justify-content-center">
                <h1>Welcome to <span className="text-muted"> Dynamic</span><span className="text-danger">Dash</span></h1>
                <p className="text-muted my-2">Analyse your Key Performance Indicators (KPI's)</p>
                
                {/* Login Form */}
                
                <Form className="LoginForm d-flex flex-column  my-5">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Keep me Signed In" />
                    </Form.Group>
                    <div className="loginButton align-items-center">
                    <Button  variant="danger" type="submit">
                        Sign In
                    </Button>
                    </div>
                  
                </Form>
            </div>
            
        </>
    )
}

export default MainBar
