import React, { useState } from 'react';
import { ImQuotesLeft } from "react-icons/im"
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io"
import avatar1 from "../../../images/avatar1.jpg"
import avatar2 from "../../../images/avatar2.jpg"
import avatar3 from "../../../images/avatar3.jpg"
import avatar4 from "../../../images/avatar4.jpg"
import avatar5 from "../../../images/avatar5.jpg"
import "./testimonials.css";
import SectionHeader from '../sectionHead/SectionHead';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Diana Ayi",
            quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
            job: "Student",
            avatar: avatar1
        },
        {
            id: 2,
            name: "Daniel Vinyo",
            quote: "Harum quaerat hic consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum this and that odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
            job: "Software Egineer",
            avatar: avatar2
        },
        {
            id: 3,
            name: "Edem Quist",
            quote: "Quaerat hic praesentium consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
            job: "University Lecturer",
            avatar: avatar3
        },
        {
            id: 4,
            name: "Grace Lavoe",
            quote: "Cupiditate deleniti sint consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
            job: "Talking Parrot",
            avatar: avatar4
        },
        {
            id: 5,
            name: "Nana Yaa Dankwa",
            quote: "Maxime minima cumque sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
            job: "Pharmacist",
            avatar: avatar5
        }
    ]
    const [index, setIndex] = useState(0)
    const { name, quote, job, avatar } = testimonials[index]

    const handelPreTestimonial = () =>{
        setIndex(prev=>prev - 1)
        if(index  <= 0){
            setIndex(testimonials.length - 1)
        }
    }
    const handelNextTestimonial = () =>{
        setIndex(prev=>prev + 1)

        if(index >= testimonials.length - 1){
            setIndex(0)
        }
    }
    return (
        <section className="testimonilas">
            <div className="container testimonials__container">
                <SectionHeader title="Testimonila" icon={<ImQuotesLeft />} className="testimonials__head" />
                <div className='cart testimonial'>
                    <div className='testimonial__avatar'>
                        <img src={avatar} alt="" />
                    </div>
                    <p className='testimonial__quote'>{`"${quote}"`}</p>
                    <h5>{name}</h5>
                    <small className='testimonial__title'>{job}</small>
                </div>
                <div className="testimonials__btn-container">
                    <button className="testimonials__btn" onClick={handelPreTestimonial}><IoIosArrowDropleftCircle /></button>
                    <button className="testimonials__btn" onClick={handelNextTestimonial}><IoIosArrowDroprightCircle /></button>
                </div>
            </div>
        </section>
    )
}

export default Testimonials