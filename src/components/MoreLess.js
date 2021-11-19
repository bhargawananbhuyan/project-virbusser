import { Container, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import colors from "../utils/myColors";
import Fade from "react-reveal/Fade";
import { Slide as MatFade } from "@mui/material";
import { useLayoutEffect, useRef, useState } from "react";

const moreOfs = [
  { title: "Process standardization", imageId: "02" },
  { title: "Business planning", imageId: "03" },
  { title: "Staff employment", imageId: "04" },
  { title: "Technology interventions", imageId: "06" },
  { title: "Innovations", imageId: "05" },
];

const lessOfs = [
  { title: "Social communication", imageId: "14" },
  { title: "Gossip", imageId: "15" },
  { title: "Junk communication", imageId: "16" },
  { title: "Phone calls", imageId: "06" },
  { title: "Spam messages", imageId: "05" },
];

function MoreLess() {
  const theme = useTheme();

  const classes = useStyles(theme);

  let [animMore, setAnimMore] = useState(false);
  let [animLess, setAnimLess] = useState(false);

  const moreOfRef = useRef();
  useLayoutEffect(() => {
    document.addEventListener("scroll", () => {
      const moreTopPos = moreOfRef.current?.getBoundingClientRect().top;
      if (moreTopPos < 650) setAnimMore(true);
    });
  }, []);

  return (
    <Box sx={classes.root}>
      <Container maxWidth="xl" ref={moreOfRef}>
        <Fade bottom>
          <Typography component="h2">What we do?</Typography>
        </Fade>
      </Container>

      {/* more of grid */}
      <Box sx={classes.moloGridContainer}>
        <Box sx={classes.moreOfText}>
          <Typography paragraph sx={{ color: colors.lightGreen }}>
            <Fade top>more of</Fade>
          </Typography>
        </Box>
        <Box
          sx={{
            ...classes.moloGridBase,
            gridRow: "1",
            gridColumn: "3/6",
          }}
        >
          <Box sx={{ left: 0, bottom: 100 }}>
            {moreOfs.map((mf, i) => (
              <MatFade
                in={animMore}
                direction="up"
                timeout={(1000 * (i + 1)) / 3}
              >
                <Box
                  component="section"
                  key={i}
                  sx={{
                    ...classes.moloCard,
                    "&:last-child": { mr: 3 },
                  }}
                >
                  <div>
                    <Typography paragraph>{mf.title}</Typography>
                    <img
                      src={`/assets/Virbusser website-${mf.imageId}.png`}
                      alt={mf.title.toLowerCase()}
                    />
                  </div>
                </Box>
              </MatFade>
            ))}
          </Box>
        </Box>

        <Box sx={classes.lessOfText}>
          <Typography paragraph>
            <Fade top>less of</Fade>
          </Typography>
        </Box>
        <Box
          sx={{
            ...classes.moloGridBase,
            gridRow: "2",
            gridColumn: "1/4",
            direction: "rtl",
          }}
        >
          <Box sx={{ right: 0, bottom: 100 }}>
            {lessOfs.map((lf, i) => (
              <MatFade
                in={animMore}
                direction="up"
                timeout={(1000 * (i + 1)) / 3}
              >
                <Box
                  component="section"
                  key={i}
                  sx={{ ...classes.moloCard, "&:last-child": { ml: 3 } }}
                >
                  <div style={{ textAlign: "left", alignItems: "flex-end" }}>
                    <Typography paragraph>{lf.title}</Typography>
                    <img
                      src={`/assets/Virbusser website-${lf.imageId}.png`}
                      alt={lf.title.toLowerCase()}
                    />
                  </div>
                </Box>
              </MatFade>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const useStyles = (theme) => ({
  root: {
    "& h2": {
      fontWeight: "bold",
      color: "whitesmoke",
      mt: 18,
      mb: 10,
      fontSize: 55,
      [theme.breakpoints.down("md")]: {
        fontSize: 36,
        mt: 10,
      },
      [theme.breakpoints.down("lg")]: {
        textAlign: "center",
      },
    },
  },

  moloGridContainer: {
    display: "grid",
    gridTemplateColumns: "300px 100px auto 100px 300px",
    gridTemplateRows: "repeat(2, 500px)",
    rowGap: 10,
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "50px 75px auto 75px 50px",
      gridTemplateRows: "repeat(2, 400px)",
    },
  },

  moloGridBase: {
    backgroundColor: colors.darkTile,
    position: "relative",
    overflowX: "scroll !important",
    scrollbarWidth: "none",
    msOverflowStyle: "hidden",
    "&::-webkit-scrollbar": {
      width: 0,
      height: 0,
    },

    "& div": {
      display: "flex",
      columnGap: 3,
      position: "absolute",
    },
  },

  moloCard: {
    height: 250,
    width: 250,
    backgroundColor: colors.bgPrimary,
    borderRadius: 3,

    [theme.breakpoints.down("md")]: {
      height: 200,
      width: 200,
      mb: -3,
    },

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& div": {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      ml: -3,
      [theme.breakpoints.down("md")]: { ml: 0 },
    },
    "& p": {
      fontSize: 20,
      fontWeight: "bold",
      width: 165,
      color: "whitesmoke",
      [theme.breakpoints.down("md")]: { fontSize: 16, width: 150 },
    },
    "& img": {
      height: 75,
      width: 75,
      mt: 2,
      [theme.breakpoints.down("md")]: {
        height: 60,
        width: 60,
      },
    },
  },

  moreOfText: {
    gridRow: "1",
    gridColumn: "2",
    backgroundColor: colors.darkTile,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    position: "relative",

    "& p": {
      position: "absolute",
      fontSize: 36,
      zIndex: 10,
      width: 200,
      fontWeight: "bold",
      color: colors.lightGreen,
      left: 135,
      top: 50,
      [theme.breakpoints.down("md")]: {
        left: 100,
        top: 40,
        fontSize: 28,
      },
    },
  },

  lessOfText: {
    gridRow: "2",
    gridColumn: "4",
    backgroundColor: colors.darkTile,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    position: "relative",

    "& p": {
      position: "absolute",
      fontSize: 36,
      zIndex: 10,
      width: 200,
      fontWeight: "bold",
      color: colors.rRed,
      right: 65,
      top: 50,
      [theme.breakpoints.down("md")]: {
        right: 0,
        top: 40,
        fontSize: 28,
      },
    },
  },
});

export default MoreLess;
