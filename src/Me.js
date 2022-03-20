import { Zoom } from 'react-reveal';
import './Me.css'

function Me() {
    return (

        <div className="Summary">
            <div style={{display: 'inline-block', position: 'relative', left: 100}}>
                <span className='Hi'>Hi, I'm</span>
                <span>Narendra Rajpoot</span>
                <div className='' style={{ 'fontSize': '20px' }}>Assistant System Engineer</div>
                <div className='' style={{ 'fontSize': '20px' }}>@ Tata Consultancy Services</div>
            </div>

            <div style={{position: 'relative', fontSize: 180, display: 'inline-block', textAlign: 'center', left: '30%'}}>&lt;/&gt;</div>
        </div>

    );
}
export default Me;