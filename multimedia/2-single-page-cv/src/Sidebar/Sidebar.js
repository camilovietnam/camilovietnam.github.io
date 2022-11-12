import '../css/Sidebar.css';
import {Component} from "react";
import Social from "./Social";
import Links from "./Links";

class Sidebar extends Component{
    render() {
        return (
            <div className="sidebar">
                <img alt="profile" src="/multimedia/2-single-page-cv/build/profile.png" className={"rounded-circle"} />
                <Social />
                <Links />
            </div>
        )
    }
}

export default Sidebar;