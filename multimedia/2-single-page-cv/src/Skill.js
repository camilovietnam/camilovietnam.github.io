import './css/Skill.css'
import {Component} from "react";

class Skill extends Component {
    render () {
        return (
            <div className="col col-12 col-lg-6 skill">
                {this.props.name}
                <i className="float-right">
                    {this.props.value}%
                </i>
                <div className="progress-bar">
                    <div style={{ width: `${this.props.value}%` }}></div>
                </div>
            </div>
        )
    }
}

export default Skill;