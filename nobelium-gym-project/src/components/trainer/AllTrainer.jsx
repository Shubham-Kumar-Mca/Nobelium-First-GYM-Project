import React from "react";
import Trainer1 from "../../../images/trainer1.jpg";
import Trainer2 from "../../../images/trainer2.jpg";
import Trainer3 from "../../../images/trainer3.jpg";
import Trainer4 from "../../../images/trainer4.jpg";
import Trainer5 from "../../../images/trainer5.jpg";
import Trainer6 from "../../../images/trainer6.jpg";
import Header from "../header/Header";
import HeaderImage from "../../../images/header_bg_3.jpg";
import { FaLinkedin, FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import {Link} from "react-router-dom"

const AllTrainer = () => {
  const trainers = [
    {
      id: 1,
      image: Trainer1,
      name: "John Doe",
      job: "Aerobic Trainer",
      socials: [
        "https://instagram.com/",
        "https://twitter.com/",
        "https://facebook.com/",
        "https://linkedin.com/",
      ],
    },
    {
      id: 2,
      image: Trainer2,
      name: "Daniel vinyo",
      job: "Speed Trainer",
      socials: [
        "https://instagram.com/",
        "https://twitter.com/",
        "https://facebook.com/",
        "https://linkedin.com/",
      ],
    },
    {
      id: 3,
      image: Trainer3,
      name: "Edem Quist",
      job: "Flexibility Trainer",
      socials: [
        "https://instagram.com/",
        "https://twitter.com/",
        "https://facebook.com/",
        "https://linkedin.com/",
      ],
    },
    {
      id: 4,
      image: Trainer4,
      name: "Shatta Wale",
      job: "Body Composition Trainer",
      socials: [
        "https://instagram.com/",
        "https://twitter.com/",
        "https://facebook.com/",
        "https://linkedin.com/",
      ],
    },
    {
      id: 5,
      image: Trainer5,
      name: "Diana Ayi",
      job: "Circuit Trainer",
      socials: [
        "https://instagram.com/",
        "https://twitter.com/",
        "https://facebook.com/",
        "https://linkedin.com/",
      ],
    },
    {
      id: 6,
      image: Trainer6,
      name: "Wayne Carter",
      job: "Physical Trainer",
      socials: [
        "https://instagram.com/",
        "https://twitter.com/",
        "https://facebook.com/",
        "https://linkedin.com/",
      ],
    },
  ];
  return (
    <div>
      <Header title="Meet Our All Trainers" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum,
        veritatis quasi pariatur veniam tempora distinctio facilis asperiores
        labore!
      </Header>

      <div className="container trainers__wrapper mt">
        {trainers.map(({ id, image, name, job, socials }) => (
          <div key={id} className="cart trainer">
            <img src={image} alt="" />
            <h3>{name}</h3>
            <p>{job}</p>

            <div className="footer__socials ma">
              <Link to={socials[3]} target="_blank">
                <FaLinkedin />
              </Link>
              <Link to={socials[2]} target="_blank">
                <FaFacebookF />
              </Link>
              <Link to={socials[1]} target="_blank">
                <AiOutlineTwitter />
              </Link>
              <Link to={socials[0]} target="_blank">
                <AiFillInstagram />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTrainer;
