import React from 'react'
import "./topbar.scss";
import {Person,Mail} from '@material-ui/icons'

const Topbar = ({menuOpen,menuHandler}) => {
    return (
        <div className={`topbar + ${menuOpen && "active"}`}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro"className="logo">Genius.</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                            <span>9849221866</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                            <span>anishmaharjan17@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={menuHandler}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Topbar
