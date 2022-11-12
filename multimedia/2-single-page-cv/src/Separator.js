import {Component} from "react";
import './Separator.css'

class Separator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true
        }

        setInterval(() => {
            this.setState({
                display: !this.state.display
            })

        }, 400)
    }

    render () {
        return (
            <p className="separator">
                <span>
                    >{ this.state.display ? '_' : ''}
                </span>
            </p>
        )
    }
}

export default Separator;