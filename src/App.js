import { Component } from 'react';
import { useMediaQuery } from 'react-responsive';
import './App.css';
import Me from './Me';
import Projects from './projects/Projects';
import WorkExperiences from './WorkExperiences';

class AppInner extends Component{
  constructor(props) {
    super(props);
    this.state = {
      x: 10,
      section: <Me deviceInfo={this.props.deviceInfo}/>
    };
    this.onClicksMe = this.onClicksMe.bind(this);
    this.onClickProjects = this.onClickProjects.bind(this);
    this.onClickWorkExperience = this.onClickWorkExperience.bind(this);
  }

  onClicksMe(e) {
    // console.log(this.state.x); 
    this.setState((state, props) => {return{ section: <Me deviceInfo={this.props.deviceInfo}/>}});
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
          {this.props.deviceInfo.isDesktopOrLaptop}
        </span>
        <div className='MenuItems'>
          <span onClick={this.onClicksMe} className='MenuItem'>Me!</span>
          <span onClick={this.onClickProjects} className='MenuItem'>Projects</span>
          <span onClick={()=>{}} className='MenuItem'>Skills</span>
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

function App() {
  var deviceInfo = {
    isDesktopOrLaptop: useMediaQuery({ query: '(min-width: 1224px)'}),
    isBigScreen: useMediaQuery({ query: '(min-width: 1824px)' }),
    isTabletOrMobile: useMediaQuery({ query: '(max-width: 1224px)' }),
    isPortraiT: useMediaQuery({ query: '(orientation: portrait)' }),
    isRetina: useMediaQuery({ query: '(min-resolution: 2dppx)' })
  }
  
  return <AppInner deviceInfo = {deviceInfo}/>
}

export default App;
