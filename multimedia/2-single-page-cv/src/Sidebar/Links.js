import {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBook, faEnvelopeOpen, faFile, faHome, faServer, faUser} from "@fortawesome/fontawesome-free-solid";

class Links extends  Component {
    render() {
        return (
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
        )
    }
}

export default Links;