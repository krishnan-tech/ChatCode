import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Rooms from "../components/Rooms";
import React from "react";
import Head from "next/head";

const Index = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <Rooms />
    </div>
  );
};

export default Index;
