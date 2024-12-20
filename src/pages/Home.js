import React from "react";
import WhyUs from "../components/WhyUs";
import Hero from "../components/Hero";
import CardList1 from "../components/CardList1";
import CardList2 from "../components/CardList2";
import CardList3 from "../components/CardList3";
import AboutUs from "../components/AboutUs";
import Vision from "../components/Vision";
import WhyChooseSips from "../components/WhyChooseSips";
const Home = () => {
  return (
    <>
      <section className="wrapper bg-light position-relative min-vh-70 d-lg-flex align-items-center container my-10">
        <Hero />
        
        {/* <Header /> */}
      </section>

      <hr className="container" />
      <section className="wrapper container">
        <CardList1 />
        <CardList2 />
        <CardList3 />
      </section>

      <section className="wrapper ">
        <WhyUs />
      </section>
      <AboutUs />
      <hr className="container" />
      <WhyChooseSips />
    </>
  );
};

export default Home;
