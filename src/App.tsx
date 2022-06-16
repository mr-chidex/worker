import { FC, createContext } from "react";

import Context from "./components/Context";
import Footer from "./components/Footer";
import Routes from "./Routes";

export const UserContext = createContext({});

const App: FC = () => {
  return (
    <Context>
      <Routes />
      <Footer />
    </Context>
  );
};

export default App;
