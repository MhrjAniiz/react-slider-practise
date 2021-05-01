import React from 'react'
import './menu.scss'


const menu = ({menuOpen,menuHandler}) => {
    return (
        <div className={`menu + ${menuOpen && "active"}`}> 
        <ul>
            <li onClick={menuHandler}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={menuHandler}>
                <a href="#portfolio" >Portfolio</a>
            </li>
            <li onClick={menuHandler}>
                <a href="#works">Work</a>
            </li>
            <li onClick={menuHandler}>
                <a href="#testimonials">Testimonials</a>
            </li>
            <li onClick={menuHandler}>
                <a href="#contact">Contact</a>
            </li>
            

        </ul>
            
        </div>
    )
}

export default menu
