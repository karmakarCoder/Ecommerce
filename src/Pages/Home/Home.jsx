import React from "react";
import Intro from "../../HomeComponent/Intro/Intro";
import Ads1 from "../../HomeComponent/Ads1/Ads1";
import NewArrival from "../../HomeComponent/NewArrival/NewArrival";
import Ads from "../../HomeComponent/Ads2/Ads";
import SpecialOffer from "../../HomeComponent/SpecialOffer/SpecialOffer";
import BestSeller from "../../HomeComponent/BestSeller/BestSeller";

const Home = () => {
  return (
    <>
      <Intro />
      <Ads1 />
      <NewArrival />
      <BestSeller />
      <Ads />
      <SpecialOffer />
    </>
  );
};

export default Home;
