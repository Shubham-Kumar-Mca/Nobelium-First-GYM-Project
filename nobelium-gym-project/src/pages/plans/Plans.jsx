import React from 'react';
import HeaderImage from "../../../images/header_bg_4.jpg"
import "./plans.css";
import Header from '../../components/header/Header';

const Plans = () => {
  const plans = [
    {
      id: 1,
      name: 'Silver Package',
      desc: 'This package is perfect for beginners who need constant help',
      price: 29.99,
      features: [
        { feature: 'First Feature', available: true },
        { feature: 'Second Feature', available: true },
        { feature: 'Third Feature', available: true },
        { feature: 'Fourth Feature', available: true },
        { feature: 'Fifth Feature', available: true },
        { feature: 'Fifth Feature Plus', available: false },
        { feature: 'Sixth Feature', available: false },
        { feature: 'Seventh Feature', available: false },
        { feature: 'Seventh Feature Plus', available: false },
        { feature: 'Eighth Feature', available: false },
        { feature: 'Ninth Feature', available: false },
        { feature: 'Tenth Feature', available: false },
        { feature: 'Eleventh Feature', available: false }
      ]
    },
    {
      id: 2,
      name: 'Gold Package',
      desc: 'This is the perfect package for beginners who know what their doing',
      price: 49.99,
      features: [
        { feature: 'First Feature', available: true },
        { feature: 'Second Feature', available: true },
        { feature: 'Third Feature', available: true },
        { feature: 'Fourth Feature', available: true },
        { feature: 'Fifth Feature', available: true },
        { feature: 'Fifth Feature Plus', available: true },
        { feature: 'Sixth Feature', available: true },
        { feature: 'Seventh Feature', available: true },
        { feature: 'Seventh Feature Plus', available: true },
        { feature: 'Eighth Feature', available: false },
        { feature: 'Ninth Feature', available: false },
        { feature: 'Tenth Feature', available: false },
        { feature: 'Eleventh Feature', available: false }
      ]
    },
    {
      id: 3,
      name: 'Platinum Package',
      desc: 'This package is perfect for busy people who need home service',
      price: 89.99,
      features: [
        { feature: 'First Feature', available: true },
        { feature: 'Second Feature', available: true },
        { feature: 'Third Feature', available: true },
        { feature: 'Fourth Feature', available: true },
        { feature: 'Fifth Feature', available: true },
        { feature: 'Fifth Feature Plus', available: true },
        { feature: 'Sixth Feature', available: true },
        { feature: 'Seventh Feature', available: true },
        { feature: 'Seventh Feature Plus', available: true },
        { feature: 'Eighth Feature', available: true },
        { feature: 'Ninth Feature', available: true },
        { feature: 'Tenth Feature', available: true },
        { feature: 'Eleventh Feature', available: true }
      ]
    }
  ]
  return (
    <>
      <Header title="Membership Plans" image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat pariatur dolorum voluptas sequi qui commodi dolores.
      </Header>
      <section className='plans'>
        <div className="container plans__container">
          {
            plans.map(({id, name, desc, price, features})=>(
              <div key={id} className="cart plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`${price}`}</h1> <h2>/mo</h2>
                {
                  features.map(({feature, available}, index)=>(
                    <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
                  ))
                }
                <button className='btn lg'>Choose Plan</button>
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Plans;