import React from 'react';
import Header from '../Header/Header';
import HeaderMain from '../HeaderMain/HeaderMain';
import Service from '../Service/Service';
import Partner from '../Partner/Partner';
import Achievement from '../Achivement/Achievement';
import Pricing from '../Pricing/Pricing';
import Footer from '../Footer/Footer';
import './Home.css';
const Home = () => {
  return (
    <section className='home'>
      <Header />
      <HeaderMain />
      <Service />
      <Partner />
      <Achievement />
      <Pricing />
      <Footer />
    </section>
  );
};

export default Home;
