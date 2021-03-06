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

import { motion, AnimatePresence } from "framer-motion";
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
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Header />
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" style={{ background: "blue" }} />

      <div
        style={{
          background: state.theme === "light" ? theme.light : theme.transparent,
          paddingTop: "5px",
        }}
      >
        <Container className="main" maxWidth="xl">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0.2, x: -1000 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -1000 }}
              transition={{ duration: 1 }}
            >
              <Box sx={{ my: 4 }}>{props.children}</Box>
            </motion.div>
          </AnimatePresence>
        </Container>
      </div>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}
