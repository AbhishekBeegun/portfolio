import React from "react";

const Closenav = ({sidebar,closeSidebar}) => {
    return (
        <div className={sidebar?"closenav closenav--open":"closenav"} onClick={closeSidebar}>
         <div className="closehere">
            <p>TAP HERE TO CLOSE..TAP HERE TO CLOSE..TAP HERE TO CLOSE..TAP HERE TO CLOSE..
            TAP HERE TO CLOSE..TAP HERE TO CLOSE..TAP HERE TO CLOSE..TAP HERE TO CLOSE..
            TAP HERE TO CLOSE..TAP HERE TO CLOSE..TAP HERE TO CLOSE..TAP HERE TO CLOSE..
            TAP HERE TO CLOSE..TAP HERE TO CLOSE..TAP HERE TO CLOSE..TAP HERE TO CLOSE..
            TAP HERE TO CLOSE..TAP HERE TO CLOSE..TAP HERE TO CLOSE..TAP HERE TO CLOSE..
            TAP HERE TO CLOSE..TAP HERE TO CLOSE..TAP HERE TO CLOSE..TAP HERE TO CLOSE..
            TAP HERE TO CLOSE..TAP HERE TO CLOSE..TAP HERE TO CLOSE..TAP HERE TO CLOSE..
            TAP HERE TO CLOSE..TAP HERE TO CLOSE..TAP HERE TO CLOSE..TAP HERE TO CLOSE..
            TAP HERE TO CLOSE..TAP HERE TO CLOSE..TAP HERE TO CLOSE..TAP HERE TO CLOSE..
            TAP HERE TO CLOSE..TAP HERE TO CLOSE..TAP HERE TO CLOSE..TAP HERE TO CLOSE..
            
            </p></div>

        </div>
    )
}

export default Closenav