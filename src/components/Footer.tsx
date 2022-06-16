import { FC, useContext } from "react";
import { AppContext } from "./Context";

const Footer: FC = () => {
  const { state } = useContext(AppContext);

  return (
    <footer style={{ color: `${state.theme === "dark" ? "#fff" : "black"}` }}>
      Designed by{" "}
      <a
        href="https://github.com/mr-chidex"
        rel="noreferrer noopener"
        target="_blank"
        style={{ color: `${state.theme === "dark" ? "#fff" : "black"}` }}
      >
        mr-chidex
      </a>
    </footer>
  );
};

export default Footer;
