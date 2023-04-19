import React from 'react';
import "./about.css"
import HeaderImage from "../../../images/header_bg_1.jpg"
import Header from '../../components/header/Header';

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage} >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, veritatis quasi pariatur veniam tempora distinctio facilis asperiores labore, at aliquid repudiandae nisi nemo, eligendi omnis aspernatur repellat sint doloribus voluptatem!
      </Header>
    </>
  )
}

export default About