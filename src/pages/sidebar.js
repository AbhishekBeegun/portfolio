import React from "react";
import { Link } from "react-scroll";

const Sidebar =({sidebar}) => {
    return(
        <div className={sidebar?"sidebar sidebar--open":"sidebar"}>
            <Link activeClass="active"
            to="Projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}><p>Projects</p></Link>

            <Link activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}><p>About</p></Link>

            <Link activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}><p>Contact</p></Link>
        </div>
    )
}

export default Sidebar