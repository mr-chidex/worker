import React, { FC } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Routes from "./Routes";

const App: FC = () => {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
};

export default App;
