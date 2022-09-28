import React, { useState } from "react";
import Navigation from "./pages/navigation";
import Projects from "./pages/projects";
import About from "./pages/About";
import Contact from "./pages/contact";
import Footer from "./pages/Footer";
import Toolbar from "./pages/Toolbar";
import Sidebar from "./pages/sidebar";
import Closenav from "./pages/closenav";


function Home(){

    const[sidebar,setSidebar] = useState(false);

    const toggleSidebar =() => {
        setSidebar((prevState)=> !prevState)
    }
    return (
        <div className="Home">
            <Toolbar openSidebar={toggleSidebar}/>
            <Closenav sidebar={sidebar} closeSidebar={toggleSidebar}/>
            <Sidebar sidebar={sidebar}/>
            <Navigation/>
            <div className="p">
            <Projects/>
            </div>
            <div className="a">
            <About/>
            </div>
            <div className="c">
            <Contact/>
            </div>

        </div>
    )
}

export default Home ;