import React from "react";
import Header from "./header/Header";
import ReferCard from "./body/ReferCard";
import FormComp from "./body/FormComp";
import ReferCount from "./body/ReferCount";
import "./header/Header.css";
import Footer from "./footer/Footer";
import DropDownForm from "./body/DropDownForm";
import ReferCopy from "./body/ReferCopy";

const Home = () => {
  return (
    <>
      <Header />
      <ReferCard />
      <DropDownForm />
      <ReferCopy />
      <FormComp />
      <ReferCount />
      <Footer />
    </>
  );
};
export default Home;
