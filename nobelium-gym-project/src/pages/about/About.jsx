import React from "react";
import Button from "./../../components/aboutButton/Button";

import styles from "./About.module.css";

import YouTube from "react-youtube";
import HeaderImage from "../../../images/header_bg_1.jpg";
import Header from "../../components/header/Header";

const About = () => {
  const opts = {
    height: "250",
    width: "400",
    playerVars: {
      autoplay: 1,
      onLoad: () => {
        console.log("test");
      },
    },
  };

  function onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, voluptates?
      </Header>
      <div className={styles.about}>
        <div className={styles.aboutUs}>
          <YouTube
            className={styles.aboutUsVid}
            videoId="eaRQF-7hhmo"
            opts={opts}
            onReady={onReady}
          />
          {/* <div className={styles.container}></div> */}
          <div className={styles.aboutUsText}>
            <p className={styles.aboutTitle}>About Us</p>
            <span className={styles.textColor}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate aut exercitationem architecto minima soluta ab eligendi
                ipsam ratione eos voluptas explicabo accusantium voluptatem illum
                corporis tempore, expedita excepturi rerum saepe.
              </p>
            </span>
            <Button buttonText="Learn More" />
          </div>
        </div>
        <div className={styles.whyUs}>
          <div className={styles.whyUsText}>
            <p className={styles.aboutTitle}>Why Us</p>
            <ul>
              <li>
                <span className={styles.textColor}>
                  <h2>👉 Consultation with experts</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem voluptas dolorum mollitia? Doloremque, ipsum
                    reiciendis!
                  </p>
                </span>
              </li>
              <li>
                <span className={styles.textColor}>
                  <h2>👉 Best workout facilities</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Laboriosam obcaecati amet totam officia voluptatum similique
                    fugit harum pariatur sapiente quia delectus tempora asperiores
                    commodi, quis quos facere, veniam quisquam dicta?
                  </p>
                </span>
              </li>
            </ul>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aut exercitationem architecto minima soluta ab eligendi ipsam ratione eos voluptas explicabo accusantium voluptatem illum corporis tempore, expedita excepturi rerum saepe.</p> */}
          </div>
          <YouTube
            className={styles.aboutUsVid}
            videoId="9LUv3kbmNfg"
            opts={opts}
            onReady={onReady}
          />
        </div>
      </div>
    </>
  );
};

export default About;
