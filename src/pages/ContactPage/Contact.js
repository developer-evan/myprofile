import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaPhoneVolume, FaTwitter } from 'react-icons/fa'
import './Contact.css';


function Contact() {    
    return (
        <div className="contact">
            {/* <h3>Blog</h3> */}
            <h1> <FaPhoneVolume/> Stay Connected</h1>
            <div className="info">
                <div className="connect">
                    <h1><li><FaFacebook /></li></h1>
                    <h1><li><FaTwitter /></li></h1>
                    <h1><li><FaInstagram /></li></h1>
                    <h1><li><FaGithub /></li></h1>
                </div>
                <div className="conne">
                    <input
                        placeholder="Enter your Email"

                    ></input>
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    )
}
export default Contact;
