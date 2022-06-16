import { FC, createContext } from "react";

import Context from "./components/Context";
import Routes from "./Routes";

export const UserContext = createContext({});

const App: FC = () => {
  return (
    <Context>
      <Routes />
    </Context>
  );
};

export default App;
