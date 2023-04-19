import React from 'react';
import Header from '../../components/mainHeader/MainHeader';
import Programs from '../../components/programs/Programs';
import Values from '../../components/values/Values';
import FAQsection from '../../components/FAQ/FAQsection';
import Testimonials from '../../components/testimonials/Testimonials'
import Trainer from '../../components/trainer/Trainer';

const Home = () => {
  return (
    <>
      <Header />
      <Programs />
      <Values />
      <Trainer />
      <FAQsection />
      <Testimonials />
    </>
  )
}

export default Home