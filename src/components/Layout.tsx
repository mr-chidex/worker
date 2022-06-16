import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";
import Header from "./Header";
import { AppContext } from "./Context";
import { theme } from "../utils/theme";
import Footer from "../components/Footer";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function ScrollTop(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

export default function Layout(props: Props) {
  const { state } = useContext(AppContext);

  return (
    <>
      <div
        style={{
          background: state.theme === "light" ? theme.light : theme.dark,
          paddingTop: "10px",
        }}
      >
        <CssBaseline />
        <AppBar>
          <Toolbar>
            <Header />
          </Toolbar>
        </AppBar>
        <Toolbar id="back-to-top-anchor" style={{ background: "blue" }} />

        <Container className="main" maxWidth="xl">
          <Box sx={{ my: 4 }}>{props.children}</Box>
          <Footer />
        </Container>
        <ScrollTop {...props}>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </div>
    </>
  );
}
