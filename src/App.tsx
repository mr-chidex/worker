import React, { FC } from "react";
import Header from "./components/Header";
import Routes from "./Routes";

const App: FC = () => {
  return (
    <>
      <Header />
      <Routes />
    </>
  );
};

export default App;
