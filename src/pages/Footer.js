import React from "react";
import Mailer from "../mailer";
import '../pages/pages.css';
import fvid from '../assets/footervid.mp4';

function Footer (){
    return(
        <div className="Footer">
            <div className="footervid">
             <video src={fvid} autoPlay loop muted />
            </div>            
        </div>

    )
}

export default Footer