import React, { FC } from "react";
import Footer from "./components/Footer";
import Routes from "./Routes";

const App: FC = () => {
  return (
    <>
      <Routes />
      <Footer />
    </>
  );
};

export default App;
