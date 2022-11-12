import './Using.css'
import {Component} from "react";
import {traverseTwoPhase} from "react-dom/test-utils";

const words = [
    "Javascript",
    "Docker",
    "Git",
    "Bamboo",
    "Pipelines",
    "Go Lang",
    "Github Actions",
    "Debian Packages",
    "Kubernetes",
    "PHP"
]
class Using extends Component {
    constructor (props) {
        super(props)
        this.state = {
            str: 'Docker',

        }

        this.showWord()
    }

    showWord = async () => {
        const word = words[Math.floor(Math.random()*words.length)]
        let partial = ''
        for (let i = 0; i < word.length; i++) {
            partial += word.charAt(i)

            this.setState({
                str: partial
            })

            await this.sleep(50)
        }


        window.setTimeout(this.showWord, 2000)
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    render () {
        return (
            <div className="using">
                <span style={{color: 'white'}}>Using:&nbsp;&nbsp;</span>
                <span>{this.state.str}</span>
            </div>
        )
    }
}

export default Using;