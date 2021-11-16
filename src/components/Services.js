import { Container, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import colors from "../utils/myColors";

function Services() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box>
      <Box sx={{ display: "flex", placeContent: "center" }}>
        <Box sx={classes.clientGridContainer}>
          {[1, 2, 3, 4].map((i) => (
            <Box key={i} sx={classes.clientGridElement}></Box>
          ))}
        </Box>
      </Box>

      <Container maxWidth="xl" sx={classes.allServicesContainer}>
        <Typography component="h2">Our Services</Typography>

        <Box sx={classes.allServicesContent}>
          <Box sx={classes.serviceGridContainer}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <Box key={i} sx={classes.serviceGridElement}></Box>
            ))}
          </Box>

          <Box sx={classes.budgetingContainer}>
            <Typography component="h4" s>
              Budgeting & forecasting
            </Typography>
            {[1, 2, 3, 4].map((i) => (
              <Typography paragraph key={i}>{`Point ${i}`}</Typography>
            ))}
          </Box>
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
  },
  clientGridElement: {
    height: 350,
    width: 350,
    backgroundColor: colors.darkTile,
    borderRadius: 3,
    zIndex: 10,
    mx: 1.5,
    my: 1.5,
    [theme.breakpoints.down("md")]: {
      height: 325,
      width: 325,
    },
  },

  allServicesContainer: {
    "& h2": {
      fontWeight: "bold",
      color: "whitesmoke",
      mt: 15,
      mb: 4.5,
      fontSize: 55,
      [theme.breakpoints.down("md")]: {
        fontSize: 36,
        mt: 7.5,
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
    [theme.breakpoints.down("xl")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  serviceGridContainer: {
    p: 5,
    maxWidth: 875,
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    placeContent: "center",
  },
  serviceGridElement: {
    height: 250,
    width: 250,
    backgroundColor: colors.darkTile,
    borderRadius: 3,
    mb: 3,
    mx: 2,
    [theme.breakpoints.up("md")]: {
      "&:nth-child(3n)": {
        mt: -4.5,
      },
      "&:nth-child(3n + 2)": {
        mt: 3,
      },
    },

    [theme.breakpoints.down("lg")]: {
      mt: 0,
      width: 250,
      height: 250,
      my: 1.5,
    },
    [theme.breakpoints.down("md")]: {
      width: 350,
      height: 250,
    },
  },

  budgetingContainer: {
    textAlign: "center",
    mt: 3,
    [theme.breakpoints.up("xl")]: {
      textAlign: "left",
    },
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
});

export default Services;
