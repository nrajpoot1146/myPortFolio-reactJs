import { Component } from "react";

// class Skills extends Component {
//     constructor(props) {
//         super(props);

//     }

//     render() {
//         return (<SkillPython></SkillPython>);
//     }
// }



class SkillPython extends Component {
    render() {
        return (
            <Skill className='SkillsIcon IconPython' name='Python' />
        );
    }
}

class SkillCPP extends Component {
    render() {
        return (
            <Skill className='SkillsIcon IconCpp' name='C++' />
        );
    }
}

class SkillC extends Component {
    render() {
        return (
            <Skill className='SkillsIcon IconC' name='C' />
        );
    }
}

class SkillJava extends Component {
    render() {
        return (
            <Skill className='SkillsIcon IconJava' name='Java' />
        );
    }
}

class SkillHtml extends Component {
    render() {
        return (
            <Skill className='SkillsIcon IconHTML' name='HTML' />
        );
    }
}

class SkillCss extends Component {
    render() {
        return (
            <Skill className='SkillsIcon IconCss' name='CSS' />
        );
    }
}

class SkillJavaScript extends Component {
    render() {
        return (
            <Skill className='SkillsIcon IconJavaScript' name='JavaScript' />
        );
    }
}

class Skill extends Component {
    render() {
        return (
            <div className="skill" style={{ display: 'inline-block', margin: '0px 5px' }}>
                <span className={this.props.className}></span>
                <span style={{verticalAlign:'middle'}}> {this.props.name}</span>
            </div>
        );
    }
}

export {
    Skill,
    SkillPython,
    SkillC,
    SkillCPP,
    SkillJava,
    SkillHtml,
    SkillCss,
    SkillJavaScript
}