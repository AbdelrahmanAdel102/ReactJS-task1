import React from 'react'
import Bttn from './bttn';
import { AiFillMail } from 'react-icons/ai';
import { BsTelephoneFill } from 'react-icons/bs'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'



class Footer extends React.Component {
    render() {
        return <div className='row mt-5 bg-dark text-white'>
            <div className='col-md-5 mt-4'>
                <h3>GET IN TOUCH</h3>
                <div><AiFillMail /> abdalrahman_adel201@outlook.com </div>
                <div><BsTelephoneFill /> 01205358267</div> 
                
                
            </div>
            <div className='col-md-3 mt-4 '>
                <Bttn name="Contact Me" />
            </div>
            <div className='col-md-4 mt-3'>
                <div>
                    <AiFillFacebook size={30}/>
                    <AiFillTwitterSquare size={30}/>
                    <AiFillLinkedin size={30}/>
                    <AiFillGithub size={30}/>
                </div>
                <div><p>copyright &copy; 2022 </p></div>
            </div>
        </div>;
    }
}

export default Footer;