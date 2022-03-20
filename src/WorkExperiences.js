import { Component } from "react";
import './WorkExperiences.css';
import { FaPencilAlt } from 'react-icons/fa';

class WorkExperiences extends Component {
    render() {
        return <div className="TimeLine">
            <div>Work Experience</div>
            <WorkExperience
                companyName="Tata Consultancy Services"
                designation="Assistant System Engineer`"
                duration="(2020-Ongoing)"
                IconColor="color_1"
                desc={["Developed Automation Scripts implemented in the Python Programming language to reduce manual efforts and improve efficiency.",
                    "Logical optimization in the application to improve its performance",
                    "Developed a Testing Environment using C/C++, SCANeR Simulation Tool, and API",
                    "Analyze Log Validation tool that's implemented in the Python Programming language and reduce its time complexity by 90%.",
                    "Implemented Shared memory using Dynamic Link Library (DLL) for message passing between two processes"
                ]} />

            <WorkExperience
                companyName="Chegg"
                designation="Subject Matter Expert of Computer Science"
                IconColor="color_2"
                duration="(2019-2020)"
                desc={[
                    "Solved 400+ Programming Questions of cross languages (like C/C++, Java, Python, etc.).",
                    "Maintained 80+ C.F. score"
                ]}
            />

            <WorkExperience
                companyName="IIT Kanput"
                designation="Student Research Associate"
                IconColor="color_3"
                duration="(Jan 2020 - FEB 2020)"
                desc={[
                    "Developed Virtual Lab of Physics Experiment named Measurement of high resistance by the method of leakage of a condenser and Measurement of Numerical aperture of optical fiber",
                ]}
            />
        </div>
    }
}

export default WorkExperiences;

class WorkExperience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: 'icon ' + this.props.IconColor
        }

        if (props.desc !== undefined)
            this.description = <ul>{props.desc.map((item) => { return <li key={item}>{item}</li> })}</ul>
        else {
            this.description = ""
        }
    }
    render() {
        return (
            <div className="TimeLineEntry">
                <div className="TimeLineEntry-inner">
                    <div className={this.state.icon}>
                        <FaPencilAlt size={'20px'} style={{ margin: 'auto' }} />
                    </div>
                    <div className="CompanyName">
                        {this.props.companyName}
                        <span style={{ fontStyle: 'italic', fontSize: '15px', marginLeft: 20 }}> {this.props.duration}</span>
                    </div>
                    {/* <span className="Circle"></span> */}
                    <div className="Designation">
                        {this.props.designation}
                    </div>
                    <div className="ProjectDescription" style={{ position: "relative" }}>
                        {this.description}
                    </div>
                </div>
            </div>
        );
    }
}