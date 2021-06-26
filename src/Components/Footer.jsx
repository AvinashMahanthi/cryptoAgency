import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitterSquare, faFacebookF, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div>
            <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col col-md-4">
  	 			<h4>Company</h4>
  	 			<ul>
  	 				<li><a href="# ">Home</a></li>
  	 				<li><a href="# ">About</a></li>
  	 				<li><a href="# ">Pricing</a></li>
  	 				<li><a href="# ">Privacy Policy</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col col-md-4">
  	 			<h4>Platform</h4>
  	 			<ul>
  	 				<li><a href="# ">Dashboard</a></li>
  	 				<li><a href="# ">Portfolio</a></li>
  	 				<li><a href="# ">Trade</a></li>
  	 				<li><a href="# ">Payment Options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col col-md-4">
  	 			<h4>Address</h4>
  	 			<ul>
  	 				<li><a href="# ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate adipisci quia ab omnis id ipsum quae inventore </a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
                    <a href="# "><FontAwesomeIcon icon={faGithub} /></a>
  	 				<a href="# "><FontAwesomeIcon icon={faFacebookF}/></a>
  	 				<a href="# "><FontAwesomeIcon icon={faLinkedin}/></a>
  	 				<a href="# "><FontAwesomeIcon icon={faTwitterSquare}/></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
        </div>
    )
}

export default Footer
