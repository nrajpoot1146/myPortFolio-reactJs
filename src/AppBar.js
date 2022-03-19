import { Component } from "react";
import './AppBar.css'

class AppBar extends Component{
    render() {
        return <div className="AppBar">
          <span onClick={()=>{}} className='AppBar-Item'>Me!</span>
          <span onClick={()=>{}} className='AppBar-Item'>Projects</span>
          <span onClick={()=>{}} className='AppBar-Item'>Skills</span>
          <span onClick={()=>{}} className='AppBar-Item'>Work Experience</span>
        </div>
    }
}

export default AppBar; 