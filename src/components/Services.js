import { Container, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import colors from "../utils/myColors";
import Fade from "react-reveal/Fade";
import { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
import ServiceElem from "./ServiceElem";

function Services() {
  const theme = useTheme();
  const classes = useStyles(theme);

  let [animDisplay, setAnimDisplay] = useState(false);
  const clientsRef = useRef();
  let [clientDisplay, setClientDisplay] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setAnimDisplay(true);

      const top = clientsRef.current?.getBoundingClientRect().top;
      if (window.scrollY >= top - 350) {
        setClientDisplay(true);
      }
    });
  }, []);

  let [serviceData, setServiceData] = useState({
    title: "Budgeting & Forecasting",
    points: ["Point 1", "Point 2", "Point 3", "Point 4"],
  });

  return (
    <Box>
      <Box sx={{ display: "flex", placeContent: "center" }}>
        <Box sx={classes.clientGridContainer}>
          {[1, 2, 3, 4].map((i) => (
            <Fade
              key={i}
              bottom
              when={animDisplay}
              duration={parseInt(`${i}000`) / 3}
            >
              <Box sx={classes.clientGridElement}>
                <Typography component="div">
                  {animDisplay ? (
                    <>
                      <CountUp end={25} duration={1.5} suffix="+" />
                      <span>clients</span>
                    </>
                  ) : (
                    ""
                  )}
                </Typography>
              </Box>
            </Fade>
          ))}
          <img
            src={`/assets/Virbusser website-41.png`}
            alt=""
            height={175}
            width="auto"
            style={{ position: "absolute", bottom: -35, left: 20, zIndex: -10 }}
          />
          <img
            src={`/assets/Virbusser website-41.png`}
            alt=""
            height={175}
            width="auto"
            style={{ position: "absolute", top: -35, right: 25, zIndex: -9 }}
          />
        </Box>

        <Box ref={clientsRef} sx={classes.clientGridSm}>
          {[1, 2, 3, 4].map((i) => (
            <Box
              sx={{
                padding: 5,
                color: "whitesmoke",
                textAlign: "center",
              }}
            >
              <Typography
                component="div"
                sx={{
                  "& span:nth-child(1)": {
                    fontSize: 32,
                    fontWeight: "bold",
                    color: colors.lightGreen,
                  },
                  fontSize: 18,
                }}
              >
                {clientDisplay ? (
                  <Fade bottom>
                    <CountUp end={25} duration={1.5} suffix="+" />
                    <span>clients</span>
                  </Fade>
                ) : (
                  ""
                )}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Container maxWidth="xl" sx={classes.allServicesContainer}>
        <Fade bottom>
          <Typography component="h2">Our Services</Typography>
        </Fade>

        <Box sx={classes.allServicesContent}>
          <Box sx={classes.serviceGridContainer}>
            <ServiceElem
              title={"Budgeting & forecasting"}
              img={17}
              hImg={25}
              handleClick={() =>
                setServiceData({
                  title: "Budgeting & Forecasting",
                  points: ["Point 1", "Point 2", "Point 3", "Point 4"],
                })
              }
            />
            <ServiceElem
              title={"Reporting & MIS"}
              img={18}
              hImg={26}
              handleClick={() =>
                setServiceData({
                  title: "Reporting & MIS",
                  points: ["Point 1", "Point 2", "Point 3", "Point 4"],
                })
              }
            />
            <ServiceElem
              title={"Fund raising & Capital structuring"}
              img={20}
              hImg={28}
              handleClick={() =>
                setServiceData({
                  title: "Fund raising & Capital structuring",
                  points: ["Point 1", "Point 2", "Point 3", "Point 4"],
                })
              }
            />
            <ServiceElem
              title={"Statutory Compliance"}
              img={19}
              hImg={27}
              handleClick={() =>
                setServiceData({
                  title: "Statutory Compliance",
                  points: ["Point 1", "Point 2", "Point 3", "Point 4"],
                })
              }
            />
            <ServiceElem
              title={"Controls & Internal Audit"}
              img={21}
              hImg={23}
              handleClick={() =>
                setServiceData({
                  title: "Controls & Internal Audit",
                  points: ["Point 1", "Point 2", "Point 3", "Point 4"],
                })
              }
            />
            <ServiceElem
              title={"Book Reviews"}
              img={22}
              hImg={24}
              handleClick={() =>
                setServiceData({
                  title: "Book Reviews",
                  points: ["Point 1", "Point 2", "Point 3", "Point 4"],
                })
              }
            />
          </Box>

          <Fade right>
            <Box sx={classes.budgetingContainer}>
              <Box
                sx={{
                  position: "relative",
                  "& img": {
                    position: "absolute",
                    top: -25,
                    left: -50,
                    zIndex: -10,
                  },
                }}
              >
                <Typography component="h4">{serviceData.title}</Typography>
                <img
                  src={`/assets/Virbusser website-37.png`}
                  alt=""
                  height={100}
                  width="auto"
                />
              </Box>
              {serviceData.points.map((item, index) => (
                <Typography paragraph key={index}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Fade>
        </Box>
      </Container>
    </Box>
  );
}

const useStyles = (theme) => ({
  clientGridContainer: {
    display: "flex",
    placeContent: "center",
    flexWrap: "wrap",
    mt: -25,
    p: 3,
    position: "relative",
    zIndex: 10,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.between("sm", "md")]: {
      mt: -10,
    },
  },
  clientGridElement: {
    height: 350,
    width: 350,
    backgroundColor: colors.darkTile,
    borderRadius: 3,
    zIndex: 10,
    mx: 1.5,
    my: 1.5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& div": {
      display: "flex",
      flexDirection: "column",
    },
    "& span": {
      "&:first-child": {
        fontSize: 55,
        fontWeight: "bold",
        color: colors.lightGreen,
      },
      "&:nth-child(2)": {
        fontSize: 24,
        color: "whitesmoke",
      },
    },
    [theme.breakpoints.down("md")]: {
      height: 300,
      width: 300,
    },
  },

  allServicesContainer: {
    "& h2": {
      fontWeight: "bold",
      color: "whitesmoke",
      mt: 15,
      mb: 7.5,
      fontSize: 55,
      [theme.breakpoints.down("md")]: {
        fontSize: 36,
        mt: 10,
        mb: 5,
        textAlign: "center",
      },
      [theme.breakpoints.down("xl")]: {
        textAlign: "center",
      },
    },
    [theme.breakpoints.down("lg")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  allServicesContent: {
    display: "flex",
    flexDirection: "row",
    ml: -9,
    [theme.breakpoints.down("xl")]: {
      flexDirection: "column",
      alignItems: "center",
      ml: 0,
    },
  },

  serviceGridContainer: {
    p: 5,
    maxWidth: 875,
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    placeContent: "center",
    rowGap: 3,
    columnGap: 3,

    "& div": {
      "&:nth-child(2)": { mt: 5 },
      "&:nth-child(5)": { mt: -5 },
      "&:nth-child(3)": { mt: 10 },
      "&:nth-child(4)": { mt: -10 },
      [theme.breakpoints.down("lg")]: {
        "&:nth-child(2)": { mt: 0 },
        "&:nth-child(5)": { mt: 0 },
        "&:nth-child(3)": { mt: 0 },
        "&:nth-child(4)": { mt: 0 },
      },
    },
  },
  serviceGridElement: {
    cursor: "pointer",
    height: 250,
    width: 250,
    backgroundColor: colors.darkTile,
    borderRadius: 3,
    "&:hover": {
      backgroundColor: colors.lightGreen,
      boxShadow: "1px 1px 1px -5px rgba(81,196,137,0.74)",
      "& section": {
        "& p": {
          color: "whitesmoke",
        },
      },
      transition: ".2s ease",
    },

    [theme.breakpoints.down("lg")]: {
      mt: 0,
      width: 300,
      height: 300,
    },

    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",

    "& section": {
      p: 3.5,
      display: "flex",
      flexDirection: "column",

      [theme.breakpoints.down("md")]: {
        alignItems: "flex-start",
      },

      "& img": {
        height: 100,
        width: 100,
        ml: -3,
      },

      "& p": {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.dimText,
        width: 125,
        [theme.breakpoints.down("md")]: {
          width: 200,
          fontSize: 18,
        },
      },
    },
  },

  budgetingContainer: {
    // textAlign: "center",
    mt: 3,
    // [theme.breakpoints.up("xl")]: {
    //   textAlign: "left",
    // },
    color: colors.dimText,
    [theme.breakpoints.up("lg")]: {
      mt: 10,
      ml: 3.5,
    },
    "& p": {
      fontSize: 24,
      py: 1,
      px: 4.5,
      [theme.breakpoints.down("md")]: {
        fontSize: 22,
      },
    },
    "& h4": {
      fontSize: 36,
      fontWeight: "bold",
      color: "whitesmoke",
      mb: 4.5,
      [theme.breakpoints.down("md")]: {
        fontSize: 28,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: 24,
      },
    },
  },

  clientGridSm: {
    backgroundColor: colors.bgLanding,
    width: "100%",
    mx: 5,
    borderRadius: 3,
    mt: -10,
    py: 2.5,
    boxShadow: "0px 0px 10px -5px rgb(0,0,0,.5)",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
});

export default Services;
