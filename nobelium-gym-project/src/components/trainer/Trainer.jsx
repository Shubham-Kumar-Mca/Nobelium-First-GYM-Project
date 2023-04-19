import React from 'react'
import Trainer1 from "../../../images/trainer1.jpg"
import Trainer2 from "../../../images/trainer2.jpg"
import Trainer3 from "../../../images/trainer3.jpg"
import Trainer4 from "../../../images/trainer4.jpg"
import Trainer5 from "../../../images/trainer5.jpg"
import Trainer6 from "../../../images/trainer6.jpg"
import "./trainer.css"
import { Link } from 'react-router-dom'

const Trainer = () => {
    const trainers = [
        {
            id: 1,
            image: Trainer1,
            name: 'John Doe',
            job: 'Aerobic Trainer',
            socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
        },
        {
            id: 2,
            image: Trainer2,
            name: 'Daniel vinyo',
            job: 'Speed Trainer',
            socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
        },
        {
            id: 3,
            image: Trainer3,
            name: 'Edem Quist',
            job: 'Flexibility Trainer',
            socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
        },
        {
            id: 4,
            image: Trainer4,
            name: 'Shatta Wale',
            job: 'Body Composition Trainer',
            socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
        }
    ]
  return (
    <section className='container trainers'>
        <div>
            <p>Meet Our Team</p>
        </div>
        <div className="trainers__wrapper">
            {
                trainers.map(({id, image, name, job, socials})=>(
                    <div key={id} className='trainer'>
                        <img src={image} alt="" />
                        <h3>{name}</h3>
                        <p>{job}</p>
                    </div>
                ))
            }
        </div>
        <Link to="/trainerall" target="_blank" className='btn lg viewAll'>View All Trainers</Link>
    </section>
  )
}

export default Trainer