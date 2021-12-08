import { Container, useTheme, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import colors from "../utils/myColors";
import { Menu, Close } from "@mui/icons-material";
import { useState } from "react";

function Header() {
  const theme = useTheme();
  const classes = useStyles(theme);

  let [displayNav, setDisplayNav] = useState(false);

  return (
    <>
      <Box component="header" sx={classes.root}>
        <Container sx={classes.content} maxWidth="xl">
          <a href="/#" style={classes.logo}>
            <img
              src={"/assets/Virbusser website-40.png"}
              width={150}
              alt="virbusser_logo"
            />
          </a>

          <nav>
            <a href="/#">Home</a>
            <a href="#services">Services</a>
            <a href="#why-us">Why us?</a>
            <a href="#contact">Contact</a>
          </nav>
        </Container>
      </Box>

      <>
        <Box component="header" sx={classes.rootMob}>
          <div>
            <a href="/#">
              <img
                src={"/assets/Virbusser website-40.png"}
                width={100}
                alt="virbusser_logo"
              />
            </a>

            <IconButton onClick={() => setDisplayNav(!displayNav)}>
              {displayNav ? <Close /> : <Menu />}
            </IconButton>
          </div>
        </Box>

        <Box
          component="nav"
          sx={{
            position: "fixed",
            top: 0,
            left: displayNav ? 0 : "100%",
            height: "100vh",
            width: "100%",
            zIndex: 19,
            backgroundColor: colors.bgPrimary,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            rowGap: 5,
            transition: ".5s ease",

            "& a": {
              color: "whitesmoke",
              textDecoration: "none",
              fontSize: 24,
            },

            [theme.breakpoints.up("md")]: {
              display: "none",
            },
          }}
        >
          <a href="/#" onClick={() => setDisplayNav(!displayNav)}>
            Home
          </a>
          <a href="#services" onClick={() => setDisplayNav(!displayNav)}>
            Services
          </a>
          <a href="#why-us" onClick={() => setDisplayNav(!displayNav)}>
            Why us?
          </a>
          <a href="#contact" onClick={() => setDisplayNav(!displayNav)}>
            Contact
          </a>
        </Box>
      </>
    </>
  );
}

const useStyles = (theme) => ({
  root: {
    backgroundColor: colors.bgPrimary,
    boxShadow: "0px 0px 15px -10px rgb(0,0,0,.5)",

    "& nav a": {
      color: "whitesmoke",
      textDecoration: "none",
      mx: 3.5,
      fontSize: 18,
    },

    [theme.breakpoints.down("md")]: {
      "& *": {
        display: "none",
      },
    },
  },

  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    py: 2.5,
  },

  logo: {
    fontSize: 24,
    m: 0,
    textDecoration: "none",
    color: "whitesmoke",
  },

  rootMob: {
    [theme.breakpoints.up("md")]: {
      "& *": {
        display: "none",
      },
    },
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: colors.bgPrimary,
    zIndex: 20,
    "& div": {
      p: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",

      "& img": {
        mt: 0.25,
      },

      "& button": {
        color: "whitesmoke",
      },
    },
  },
});

export default Header;
