import { FC, createContext } from "react";
import Footer from "./components/Footer";
import Context from "./components/Context";
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
