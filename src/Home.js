import React from 'react'
import './App.css';
import 'remixicon/fonts/remixicon.css';
import Hero from './Hero';
import WeDo from './WeDo';
import ChooseUS from './ChooseUs';
import MoreAboutUs from './MoreAboutUs';
import Achievements from './Achievements';
import Portfolio from './Portfolio';
import Testimonial from './Testimonial'
import Blog from './Blog'
import Newsletter from './Newsletter';
import Footer from './Footer';
import Whatsapp from './Whatsapp';
import ScrollUp from './Scrollup';

function Home() {
  return (
    <div>
      <Hero />
      <WeDo />
      <ChooseUS/>
      <MoreAboutUs />
      <Achievements />
      <Portfolio />
      <Testimonial/>
      <Blog />
      <Newsletter />
      <Whatsapp />
      <ScrollUp />
      <Footer />
      
    </div>
  );
}

export default Home;
