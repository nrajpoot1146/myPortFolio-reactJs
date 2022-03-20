import { Component } from 'react';
import './App.css';
import Me from './Me';
import Projects from './projects/Projects';
import Fade from 'react-reveal'
import WorkExperiences from './WorkExperiences';

function hello() {
  console.log('hello');
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 10,
      section: <Me/>
    };

    this.onClicksMe = this.onClicksMe.bind(this);
    this.onClickProjects = this.onClickProjects.bind(this);
    this.onClickWorkExperience = this.onClickWorkExperience.bind(this);
  }

  onClicksMe(e) {
    // console.log(this.state.x); 
    this.setState((state, props) => {return{x : state.x+1, section: <Me/>}});
  }

  onClickProjects(e) {
    this.setState(
      (state, props) => {
        return {
          section: <Projects/>
        }
      }
    );
  }

  onClickWorkExperience(e){
    this.setState(
      (state, props) => {
        return {
          section: <WorkExperiences/>
        }
      }
    );
  }

  render() {

    return (<div className="App">
      <div className='AppBar'>
        <span className='Title'>
          {/* Narendra Rajpoot */}
        </span>
        <div className='MenuItems'>
          <span onClick={this.onClicksMe} className='MenuItem'>Me!</span>
          <span onClick={this.onClickProjects} className='MenuItem'>Projects</span>
          <span onClick={hello} className='MenuItem'>Skills</span>
          <span onClick={this.onClickWorkExperience} className='MenuItem'>Work Experience</span>
        </div>
      </div>
      <div className="Section">
        {this.state.section}
      </div>
    </div>
    );
  };
}

export default App;
