import React from 'react';
import Logo from '../../../images/logo.png';
import "./footer.css"
import { Link } from 'react-router-dom';
import {FaLinkedin, FaFacebookF} from "react-icons/fa"
import {AiOutlineTwitter, AiFillInstagram} from "react-icons/ai"

const Footer = () => {
    return (
        <footer>
            <div className="container footer__container">
                <article>
                    <Link to="/" className='logo'>
                        <img src={Logo} alt="" />
                    </Link>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, obcaecati fugiat! Ipsa tempora, molestiae doloremque quis voluptates expedita quaerat sint officiis corrupti recusandae dolor a iste maxime. Optio, aut velit.
                    </p>
                    <div className="footer__socials">
                        <Link to="https://www.linkedin.com/" target='_blank'><FaLinkedin /></Link>
                        <Link to="https://www.facebook.com/" target='_blank'><FaFacebookF /></Link>
                        <Link to="https://www.twitter.com/" target='_blank'><AiOutlineTwitter /></Link>
                        <Link to="https://www.instagram.com/" target='_blank'><AiFillInstagram /></Link>
                    </div>
                </article>
                <article>
                    <h4>Premalinks</h4>
                    <Link to="/about">About</Link>
                    <Link to="/plans">Plans</Link>
                    <Link to="/trainers">Trainers</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/contact">Contact</Link>
                </article>
                <article>
                    <h4>Insights</h4>
                    <Link to="/s">Blog</Link>
                    <Link to="/s">Case Studies</Link>
                    <Link to="/s">Events</Link>
                    <Link to="/s">Communities</Link>
                    <Link to="/s">FAQs</Link>
                </article>
                <article>
                    <h4>Get In Touch</h4>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/s">Supports</Link>
                </article>
            </div>
            <div className="footer_copyright">
                <small>2023 EEGATOR &copy; </small>
            </div>
        </footer>
    )
}

export default Footer