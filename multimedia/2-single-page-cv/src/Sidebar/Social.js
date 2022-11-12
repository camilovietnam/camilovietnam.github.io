import {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faLinkedinIn, faSkype, faSquareInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";

class Social extends Component {
    render () {
        return (
            <div className="sidebar-social">
                <a href="https://www.twitter.com">
                    <FontAwesomeIcon className="sidebar-icon" icon={faTwitter}/>
                </a>

                <a href="https://www.facebook.com">
                    <FontAwesomeIcon className="sidebar-icon"  icon={faFacebookF} />
                </a>

                <a href="https://www.instagram.com">
                    <FontAwesomeIcon className="sidebar-icon" icon={faSquareInstagram} />
                </a>

                <a href="https://www.skype.com">
                    <FontAwesomeIcon className="sidebar-icon" icon={faSkype} />
                </a>

                <a href="https://www.linkedin.com">
                    <FontAwesomeIcon className="sidebar-icon" icon={faLinkedinIn} />
                </a>
            </div>
        )
    }
}

export default Social;