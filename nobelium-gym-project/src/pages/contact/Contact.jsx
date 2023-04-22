import React from 'react';
import "./contact.css"
import Header from '../../components/header/Header';
import HeaderImage from "../../../images/header_bg_2.jpg";
import {Link} from "react-router-dom"
import {MdEmail} from "react-icons/md"
import {BsMessenger} from "react-icons/bs"
import {IoLogoWhatsapp} from "react-icons/io"

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quod fugiat hic ullam voluptas nobis.
      </Header>
      <section className='contact'>
        <div className="container contact__container">
          <div className="contact__wrapper">
            <Link to="mailto:krshubhamjaiswal2000@gmail.com" target='_blank'><MdEmail /></Link>
            <Link to="https://www.messenger.com/" target='_blank'><BsMessenger /></Link>
            <Link to="https://web.whatsapp.com/" target='_blank'><IoLogoWhatsapp /></Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact