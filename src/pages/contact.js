import React from "react";
import Mailer from "../mailer";
import '../pages/pages.css';

function Contact(){
    return(
        <div className="Cmain" id="Contact">
         <div className="Contactbar">
            <div className="GETINT">
             <p>Get in touch · Entrer en contact · Estar en contacto · 保持联系 . संपर्क में रहो · رابطے میں رہنا ·
             </p>
            </div>
         </div>

         <div className="CMap">
            <Mailer/>

         </div>

         <div className="Cinfo">
          <p>abhishekbeegun0642@gmail.com</p>
          <p>+230 5725 77 00</p>
         </div>
        </div>
        
    )
}

export default Contact