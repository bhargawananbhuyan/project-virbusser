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
            <Box key={i} sx={classes.clientGridElement}>
              <Typography component="div">
                <span>25+</span>
                <span>clients</span>
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Container maxWidth="xl" sx={classes.allServicesContainer}>
        <Typography component="h2">Our Services</Typography>

        <Box sx={classes.allServicesContent}>
          <Box sx={classes.serviceGridContainer}>
            <Box sx={classes.serviceGridElement}>
              <Box component="section">
                <div>
                  <img src={`/assets/Virbusser website-${17}.png`} alt="" />
                </div>
                <Typography paragraph>Budgeting & forecasting</Typography>
              </Box>
            </Box>
            <Box sx={classes.serviceGridElement}>
              <Box component="section">
                <div>
                  <img src={`/assets/Virbusser website-${18}.png`} alt="" />
                </div>
                <Typography paragraph>Reporting & MIS</Typography>
              </Box>
            </Box>
            <Box sx={classes.serviceGridElement}>
              <Box component="section">
                <div>
                  <img src={`/assets/Virbusser website-${20}.png`} alt="" />
                </div>
                <Typography paragraph>
                  Fund raising & Capital structuring
                </Typography>
              </Box>
            </Box>
            <Box sx={classes.serviceGridElement}>
              <Box component="section">
                <div>
                  <img src={`/assets/Virbusser website-${19}.png`} alt="" />
                </div>
                <Typography paragraph>Statutory Compliance</Typography>
              </Box>
            </Box>
            <Box sx={classes.serviceGridElement}>
              <Box component="section">
                <div>
                  <img src={`/assets/Virbusser website-${21}.png`} alt="" />
                </div>
                <Typography paragraph>Controls & Internal Audit</Typography>
              </Box>
            </Box>
            <Box sx={classes.serviceGridElement}>
              <Box component="section">
                <div>
                  <img src={`/assets/Virbusser website-${22}.png`} alt="" />
                </div>
                <Typography paragraph>Book Reviews</Typography>
              </Box>
            </Box>
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
    rowGap: 3,
    columnGap: 3,
  },
  serviceGridElement: {
    cursor: "pointer",
    height: 250,
    width: 250,
    backgroundColor: colors.darkTile,
    borderRadius: 3,
    "&:nth-child(2)": { mt: 5 },
    "&:nth-child(5)": { mt: -5 },
    "&:nth-child(3)": { mt: 10 },
    "&:nth-child(4)": { mt: -10 },
    "&:hover": {
      backgroundColor: colors.lightGreen,
      boxShadow: "5px 5px 51px 10px rgba(81,196,137,0.74)",
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
      "&:nth-child(2)": { mt: 0 },
      "&:nth-child(5)": { mt: 0 },
      "&:nth-child(3)": { mt: 0 },
      "&:nth-child(4)": { mt: 0 },
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
});

export default Services;
