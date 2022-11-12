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
                    <li><FontAwesomeIcon icon={faHome} /> Home </li>
                    <li><FontAwesomeIcon icon={faUser} /> About</li>
                    <li><FontAwesomeIcon icon={faFile} /> Resume</li>
                    <li><FontAwesomeIcon icon={faBook} /> Skills</li>
                    <li><FontAwesomeIcon icon={faServer} /> Portfolio</li>
                    <li><FontAwesomeIcon icon={faEnvelopeOpen} /> Contact</li>
                </ul>
            </div>
        )
    }
}

export default Sidebar;