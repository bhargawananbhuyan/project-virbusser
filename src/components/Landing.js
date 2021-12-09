import { Button, Container, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import colors from "../utils/myColors";
import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";
import { useLayoutEffect, useState } from "react";

function Landing() {
  const theme = useTheme();

  let [xOffset, setXOffset] = useState({
    top: [
      65, // for desktop
      30, // for mobile
    ],
    mid: [-50, -20],
    bot: [65, 45],
  });

  useLayoutEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setXOffset({ top: [-10, 10], mid: [-100, -30], bot: [-10, 10] });
      } else {
        setXOffset({ top: [65, 30], mid: [-50, -20], bot: [65, 45] });
      }
    });
  }, []);

  const classes = useStyles(theme, xOffset);

  return (
    <Box sx={classes.root}>
      <Container maxWidth="xl" sx={classes.content}>
        <Fade bottom>
          <Box sx={classes.introText}>
            <Typography component="h5">
              One Stop Solution for all your CFO needs
            </Typography>
            <Typography component="section">
              Enabling entrepreneurs to focus on business, leave finance support
              functions to trained professionals.
            </Typography>
            <Button variant="contained" disableElevation disableRipple>
              Get started
            </Button>
          </Box>
        </Fade>

        <Reveal effect="zoomBigToSmall">
          <Box
            sx={{
              maxWidth: 650,
              width: "100%",
              position: "relative",

              "& .logo": {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 275,
                [theme.breakpoints.down("md")]: {
                  width: 135,
                },
                [theme.breakpoints.between("md", "lg")]: {
                  width: 175,
                },
              },
              [theme.breakpoints.down("sm")]: { maxWidth: 450 },
              [theme.breakpoints.between("sm", "md")]: { maxWidth: 500 },
              [theme.breakpoints.between("md", "lg")]: { maxWidth: 550 },
              [theme.breakpoints.between("lg", "xl")]: { maxWidth: 600 },
            }}
          >
            <img
              src={"/assets/logo-circle.svg"}
              width="100%"
              alt=""
              className="logo-outer"
            />
            <img
              src={"/assets/Virbusser website-40.png"}
              alt=""
              className="logo"
            />

            <Box sx={classes.circles}>
              {/* from left */}
              <Fade left>
                <img src={"/assets/svg-1.svg"} alt="" />
              </Fade>
              <Fade left>
                <img src={"/assets/svg-2.svg"} alt="" />
              </Fade>
              <Fade left>
                <img src={"/assets/svg-3.svg"} alt="" />
              </Fade>
              {/* from right */}
              <Fade right>
                <img src={"/assets/svg-4.svg"} alt="" />
              </Fade>
              <Fade right>
                <img src={"/assets/svg-5.svg"} alt="" />
              </Fade>
              <Fade right>
                <img src={"/assets/svg-6.svg"} alt="" />
              </Fade>
            </Box>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}

const useStyles = (theme, xOffset) => ({
  root: {
    backgroundColor: colors.bgLanding,
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mx: 7.5,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
      p: 3.5,
      mx: 0,
      mt: 10,
    },
  },
  introText: {
    maxWidth: 500,
    width: "100%",
    "& h5": {
      fontSize: 42,
      color: "whitesmoke",
      fontWeight: "bold",
      lineHeight: 1.35,
    },
    "& section": {
      fontWeight: 400,
      fontSize: 22,
      color: colors.dimText,
      mt: 4,
      mb: 6.5,
      lineHeight: 2,
    },
    "& button": {
      backgroundColor: colors.paleYellow,
      textTransform: "capitalize",
      fontSize: 18,
      px: 2.5,
      py: 1.5,
      color: colors.bgLanding,
      boxShadow: `0px 0px 15px -2.5px ${colors.paleYellow}`,
      "&:hover": { backgroundColor: colors.paleYellow, boxShadow: "none" },
    },
    [theme.breakpoints.down("sm")]: {
      "& button": {
        width: "100%",
      },
    },

    [theme.breakpoints.down("md")]: {
      "& h5": { fontSize: 28 },
      "& section": { fontSize: 18, lineHeight: 1.8 },
      "& button": { fontSize: 16 },
      mt: 7.5,
    },
    [theme.breakpoints.between("md", "lg")]: {
      "& h5": { fontSize: 27 },
      "& section": { fontSize: 20, mr: 3 },
      "& button": { fontSize: 16 },
    },
  },

  circles: {
    "& img": {
      width: 110,
      position: "absolute",
      transition: "all .5s ease",

      "&:nth-child(1)": { top: 25, left: xOffset.top[0] },
      "&:nth-child(2)": { top: 275, left: xOffset.mid[0] },
      "&:nth-child(3)": { bottom: 35, left: xOffset.bot[0] },

      "&:nth-child(4)": { top: 25, right: xOffset.top[0] },
      "&:nth-child(5)": { top: 275, right: xOffset.mid[0] },
      "&:nth-child(6)": { bottom: 35, right: xOffset.bot[0] },

      [theme.breakpoints.down("sm")]: {
        width: 75,
        "&:nth-child(1)": { top: 0, left: xOffset.top[1] },
        "&:nth-child(2)": { top: 135, left: xOffset.mid[1] },
        "&:nth-child(3)": { bottom: 0, left: xOffset.bot[1] },

        "&:nth-child(4)": { top: 0, right: xOffset.top[1] },
        "&:nth-child(5)": { top: 135, right: xOffset.mid[1] },
        "&:nth-child(6)": { bottom: 0, right: xOffset.bot[1] },
      },
      [theme.breakpoints.between("sm", "md")]: {
        width: 95,
        "&:nth-child(1)": { top: 0, left: 65 },
        "&:nth-child(2)": { top: 200, left: -15 },
        "&:nth-child(3)": { bottom: 0, left: 65 },

        "&:nth-child(4)": { top: 0, right: 65 },
        "&:nth-child(5)": { top: 200, right: -15 },
        "&:nth-child(6)": { bottom: 0, right: 65 },
      },
      [theme.breakpoints.between("md", "lg")]: {
        width: 90,
        "&:nth-child(1)": { top: 25, left: 65 },
        "&:nth-child(2)": { top: 215, left: -15 },
        "&:nth-child(3)": { bottom: 25, left: 65 },

        "&:nth-child(4)": { top: 25, right: 65 },
        "&:nth-child(5)": { top: 215, right: -15 },
        "&:nth-child(6)": { bottom: 25, right: 65 },
      },
      [theme.breakpoints.between("lg", "xl")]: {
        width: 100,
        "&:nth-child(1)": { top: 15, left: 65 },
        "&:nth-child(2)": { top: 225, left: -15 },
        "&:nth-child(3)": { bottom: 25, left: 65 },

        "&:nth-child(4)": { top: 15, right: 65 },
        "&:nth-child(5)": { top: 225, right: -15 },
        "&:nth-child(6)": { bottom: 25, right: 65 },
      },
    },
  },
});

export default Landing;
