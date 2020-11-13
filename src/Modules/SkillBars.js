import React, {Component} from 'react'
import { render } from 'react-dom';

import "./SkillBars.css"

class SkillBars extends Component {
    constructor(props) {
        super(props);
        this.state = { collapsed: true };       
    }

    componentDidMount() {
        setTimeout(() => {
        this.setState({ collapsed: false })
        }, 1000);
    }

    render() {
        const { collapsed } = this.state;
        const { hue, saturation, skills } = this.props;

        return(  
            <div id="app" className={`container ${collapsed ? 'collapsed' : ''}`}>
                <h3>{this.props.title}</h3>
                {/* <p>Set the Hue and Saturation on the <code>&lt;SkillBars /&gt;</code> instance and let the component deal with the shades</p> */}
                <hr/>
                <ul className="skills">
                {skills.map((skill, index) => 
                    <li
                    key={skill.type}
                    style={{ width: `${skill.level}%`, backgroundColor: `hsl(${hue}, ${saturation}%, ${100 / (index + 3.5) }%)` }}
                    >
                    <p>{skill.type}</p>
                    </li>
                )}
                </ul>
            </div>
        )
    }
}
export default SkillBars;