import Footer from "@/components/fragments/Footer";
import Navbar from "@/components/fragments/Navbar";
import React from "react";

const BerandaLayouts = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default BerandaLayouts;
