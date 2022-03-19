import { Component } from "react";
import "./Projects.css"

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="Projects">
                <div className="H1">Projects</div>
                <Project title="Smart Dustbin" desc={[
                    'Programmed and used Arduino Uno R3 as Microcontroller and ESP8266 Wi-Fi Module for Wireless Communication.',
                    'Developed an Android App and web application to monitor Dustbin\'s status and location'
                ]} url='https://github.com/nrajpoot1146/SmartDustBin'/>
                <Project title="Auto Irrigation System" desc={[
                    'Designed an IOT based solution using a microcontroller.',
                    'Used Blynk IoT platform to monitor environmental conditions (like humidity and pressure etc.) and control Irrigation System.'
                ]} url='https://github.com/nrajpoot1146/AutoIrrigationSystem'/>
            </div>

        );
    }
}

export default Projects;

class Project extends Component {
    constructor(props) {
        super(props);
        if (props.desc !== undefined)
            this.description = <ul>{props.desc.map((item) => { return <li key={item}>{item}</li> })}</ul>
        else {
            this.description = ""
        }
    }

    render() {
        return (
            <div className="Project">
                <div className="ProjectTitle">{this.props.title}</div>
                <div className="ProjectDescription">
                    {this.description}
                </div>
                <div>
                    <a href={this.props.url} target='_blank'>{this.props.url}</a>
                </div>
            </div>
        );
    }
}