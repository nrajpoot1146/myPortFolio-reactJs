import './Me.css'

import { Component } from 'react';



class Me extends Component {
    constructor(props) {
        super(props);

        this.style = { display: "inline-block", position: 'relative', left: 100 }

        if (this.props.deviceInfo.isTabletOrMobile == true) {
            this.style.display = 'block';
            // this.style.left = '0';
            // this.style.top = '30px';
            this.style.position = 'static';
            this.style.textAlign = 'center';
            this.style.verticalAlign = 'middle'
        }
    }

    render() {
        return (
            <div className="Summary">
                {/* {this.props.deviceInfo.isDesktopOrLaptop ? "fdfd" : "123"} */}
                <div style={this.style}>
                    <span className='Hi'>Hi, I'm</span>
                    <span>Narendra Rajpoot</span>
                    <div className='' style={{ 'fontSize': '20px' }}>Assistant System Engineer</div>
                    <div className='' style={{ 'fontSize': '20px' }}>@ Tata Consultancy Services</div>
                </div>

                <div style={{
                    position: this.props.deviceInfo.isTabletOrMobile ? 'block' : 'relative',
                    fontSize: this.props.deviceInfo.isTabletOrMobile ? '30px' : '180px',
                    display: this.props.deviceInfo.isTabletOrMobile ? 'block' : 'inline-block',
                    textAlign: 'center',
                    left: this.props.deviceInfo.isTabletOrMobile ? '0' : '30%'
                }}>&lt;/&gt;</div>
            </div>

        );
    }
}
export default Me;