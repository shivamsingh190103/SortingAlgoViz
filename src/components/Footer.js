import React from 'react'

import GithubIcon from '../assets/github.svg'
import LinkedinIcon from '../assets/linkedin.svg'
import './Footer.css'

function Footer() {
    return (
        <div className="footer-warraper">
            <div className="container">
                <p className="copyright-text">Copyright &copy; {new Date().getFullYear()} - @ShivamSingh</p>
                <div className="group-icon">
                    <a href="https://github.com/shivamsingh190103 " rel="noreferrer" target="_blank">
                        <img className="github-icon" src={GithubIcon} alt="" />
                    </a> &nbsp; &nbsp;
                    <a href="https://www.linkedin.com/in/shivamsingh19012003?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bs%2FZaw39aSPuYNSjIpj6JNw%3D%3D " rel="noreferrer" target="_blank">
                        <img className="linkedin-icon" src={LinkedinIcon} alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
