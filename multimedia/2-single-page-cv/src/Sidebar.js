import './Sidebar.css';
import {Component} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHome, faUser, faFile,faBook,faServer,faEnvelopeOpen } from '@fortawesome/fontawesome-free-solid';
import { faTwitter, faFacebookF, faSquareInstagram, faSkype, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

class Sidebar extends Component{
    render() {
        return (
            <div className="sidebar">
                <img alt="profile" src="/multimedia/2-single-page-cv/build/profile.png" className={"rounded-circle"} />
                <div className="sidebar-social">
                    <FontAwesomeIcon className="sidebar-icon" icon={faTwitter}/>
                    <FontAwesomeIcon className="sidebar-icon"  icon={faFacebookF} />
                    <FontAwesomeIcon className="sidebar-icon" icon={faSquareInstagram} />
                    <FontAwesomeIcon className="sidebar-icon" icon={faSkype} />
                    <FontAwesomeIcon className="sidebar-icon" icon={faLinkedinIn} />
                </div>
                <ul className="sidebar-list">
                    <li><FontAwesomeIcon icon={faHome} />
                        <a href="#content">Home</a>
                    </li>
                    <li><FontAwesomeIcon icon={faUser} />
                        <a href="#about">About</a>
                    </li>
                    <li><FontAwesomeIcon icon={faFile} />
                        <a href="#resume">Resume</a>
                    </li>
                    <li><FontAwesomeIcon icon={faBook} />
                        <a href="#skills">Skills</a>
                    </li>
                    <li><FontAwesomeIcon icon={faServer} />
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li><FontAwesomeIcon icon={faEnvelopeOpen} />
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Sidebar;