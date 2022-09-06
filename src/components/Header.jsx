import React from "react";
import headLogo from "../images/TrollFace.png";
import "../styles/header.css";

export default function Header(){
    return(
        <div className="header">
            <div className="head-logo">
                <img src={headLogo} alt="" />
                <p>Meme Generator</p>
            </div>
            <div className="head-text">
                <p>React Course - Project 3</p>
            </div>
        </div>
    )
}