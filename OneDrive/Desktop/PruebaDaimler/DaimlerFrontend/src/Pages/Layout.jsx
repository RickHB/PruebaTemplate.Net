import React from "react";
import Navbar from "../Shared/Navbar";
import Header from "../Shared/Header";
import Principal from "../components/Principal";
import Footer from "../Shared/Footer";

export default function Layout() {
  return (
    <div>
      <Header />
      <Navbar />
      <Principal />
      <Footer />
    </div>
  );
}
