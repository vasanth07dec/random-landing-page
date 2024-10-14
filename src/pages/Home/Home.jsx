import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Feature from "../../components/Feature/Feature";
import Testimonials from "../../components/Testimonials/Testimonials";
import Pricing from "../../components/Pricing/Pricing";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
