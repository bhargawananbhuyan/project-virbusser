import { Button, Container, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import colors from "../utils/myColors";

function Landing() {
  const theme = useTheme();

  const classes = useStyles(theme);

  return (
    <Box sx={classes.root}>
      <Container maxWidth="xl" sx={classes.content}>
        <Box sx={classes.introText}>
          <Typography component="h5">
            One Stop Solution for all your CFO needs
          </Typography>
          <Typography component="section">
            Enabling entrepreneurs to focus on business, leave finance support
            functions to trained professionals.
          </Typography>
          <Button variant="contained">Get started</Button>
        </Box>

        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            p: 5,
            [theme.breakpoints.down("md")]: {
              maxWidth: 300,
            },
          }}
        >
          <img src={"/assets/vbs-pic.svg"} width="100%" alt="" />
        </Box>
      </Container>
    </Box>
  );
}

const useStyles = (theme) => ({
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
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
    },
  },
  introText: {
    maxWidth: 500,
    width: "100%",
    p: 5,
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
    },
    "& button": {
      backgroundColor: colors.paleYellow,
      textTransform: "capitalize",
      fontSize: 18,
      px: 2.5,
      color: colors.bgLanding,
      fontFamily: "'Roboto', sans-serif !important",
      "&:hover": { backgroundColor: colors.paleYellow },
    },
    [theme.breakpoints.down("md")]: {
      "& h5": { fontSize: 30 },
      "& section": { fontSize: 18 },
      "& button": { fontSize: 16 },
    },
  },
});

export default Landing;
