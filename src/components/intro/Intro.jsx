import React,{useEffect,useRef} from 'react'
import './intro.scss'
import {init} from 'ityped'

const Intro = () => {
    const textRef = useRef()
    useEffect(()=>{
        init(textRef.current,{
            showCursor:true,
            backDelay: 1500,
            strings: ["Developer","Designer","Content writer"]
        })
    },[])
    return (
        <div className="info" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="assests/man.png" alt="man"/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Anish Maharjan</h1>
                    <h3>Freelance <span ref={textRef}> Designer</span></h3>
                </div>
                <a href="#portfolio">
                    <img  className="arrow" src="assests/down.png" alt=""/>
                </a>
            </div>
        </div>
    )
}

export default Intro
