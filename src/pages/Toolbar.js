import React from "react";
import '../pages/pages.css'

const Toolbar =({openSidebar}) => {
    return (
        <div className="tool-bar">
            <div className="Burger" onClick={openSidebar}>
                <div ></div>
                <div ></div>
            </div>
            <div className="title"></div>
        </div>
    )
}

export default Toolbar