import { Container, Typography, useTheme } from "@mui/material";
import { Box, color } from "@mui/system";
import colors from "../utils/myColors";

function MoreLess() {
  const theme = useTheme();

  const classes = useStyles(theme);

  return (
    <Box sx={classes.root}>
      <Container maxWidth="xl">
        <Typography component="h2">What we do?</Typography>
      </Container>

      <Box sx={classes.moloGridContainer}>
        <Box
          sx={{
            ...classes.moloGridBase,
            gridRow: "1",
            gridColumn: "2/4",
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
          }}
        >
          <Typography paragraph sx={classes.moreOfText}>
            more of
          </Typography>
          <Box
            sx={{
              ...classes.moloGridContent,
              ...classes.moreOfGrid,
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <Box sx={{ mr: 5 }} />
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            ...classes.moloGridBase,
            gridRow: "2",
            gridColumn: "1/3",
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
            direction: "rtl",
          }}
        >
          <Typography paragraph sx={classes.lessOfText}>
            less of
          </Typography>

          <Box sx={{ ...classes.moloGridContent, ...classes.lessOfGrid }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <Box sx={{ ml: 5 }} />
            ))}
          </Box>
        </Box>
      </Box>

      {/* <Box
          sx={{
            width: "100vw",
            height: 500,
            backgroundColor: colors.darkTile,
            // ml: 10,
            mb: 12,
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
          }}
        />

        <Box
          sx={{
            width: "100vw",
            height: 500,
            backgroundColor: colors.darkTile,
            ml: -65,
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
          }}
        /> */}
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
    gridTemplateColumns: "300px auto 300px",
    gridTemplateRows: "repeat(2, 525px)",
    rowGap: 12,
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "50px auto 50px",
      gridTemplateRows: "repeat(2, 400px)",
      rowGap: 6,
    },
  },

  moloGridBase: {
    backgroundColor: colors.darkTile,
    p: 6.5,
    position: "relative",
    overflowX: "scroll",
    scrollbarWidth: "none",
    msOverflowStyle: "hidden",
    "&::-webkit-scrollbar": {
      width: 0,
      height: 0,
    },

    [theme.breakpoints.down("md")]: {
      p: 3,
    },
  },

  moreOfGrid: {
    left: 75,
    [theme.breakpoints.down("md")]: {
      left: 55,
    },
  },

  lessOfGrid: {
    right: 75,
    [theme.breakpoints.down("md")]: {
      right: 55,
    },
  },

  moreOfText: {
    fontSize: 30,
    fontWeight: "bold",
    mb: 5,
    ml: 10,
    color: colors.lightGreen,
    [theme.breakpoints.down("md")]: {
      mb: 3.5,
      ml: 7.5,
    },
  },

  lessOfText: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.rRed,
    mb: 5,
    mr: 10,
    [theme.breakpoints.down("md")]: {
      mb: 3.5,
      mr: 7.5,
    },
  },

  moloGridContent: {
    display: "flex",
    position: "absolute",

    "& div": {
      width: 300,
      height: 300,
      backgroundColor: colors.dimBg,
      borderRadius: 3,
      [theme.breakpoints.down("md")]: {
        height: 250,
        width: 250,
      },
    },
  },
});

export default MoreLess;
