import { AccountBalanceOutlined } from "@mui/icons-material";
import { Button, Container, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import colors from "../utils/myColors";

function TypeGrid() {
  const theme = useTheme();

  const classes = useStyles(theme);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Container maxWidth="xl">
        {/* types grid */}
        <Box sx={classes.typesGridContainer}>
          <Box>
            <Typography component="h4">Mobile Enablement</Typography>
            <Typography paragraph>
              Enhance your customer’s experience by creating mobile apps for
              daily use placing & tracking orders, status reporting
            </Typography>
            <img
              src={"/assets/Virbusser website-30.png"}
              alt="mobile enablement"
            />
          </Box>
          <Box>
            <Typography component="h4">Infrastructure</Typography>
            <Typography paragraph>
              Have the right IT infrastructure for your business, don’t over
              invest or under invest. Size it right and secure it right
            </Typography>
            <img
              src={"/assets/Virbusser website-33.png"}
              alt="infrastructure"
            />
          </Box>
          <Box>
            <Typography component="h4">
              Workflow tracking & Document management
            </Typography>
            <Typography paragraph>
              Track the status of all your business activities online, approve
              transactions on the move, so that you are not the bottleneck
            </Typography>
            <img
              src={"/assets/Virbusser website-32.png"}
              alt="workflow tracking & document management"
            />
          </Box>
          <Box>
            <Typography component="h4">
              ERP & Accounting tools support
            </Typography>
            <Typography paragraph>
              Find the right off the shelf products for your business. Don’t
              invest and understand, anlalyse and invest
            </Typography>
            <img
              src={"/assets/Virbusser website-35.png"}
              alt="erp & accounting tools support"
            />
          </Box>
          <Box>
            <Typography component="h4">Low cost automation</Typography>
            <Typography paragraph>
              Introduce low cost tools (excel macros and access programs) that
              reduce time in churning out the same reports every weak
            </Typography>
            <img
              src={"/assets/Virbusser website-34.png"}
              alt="low cost automation"
            />
          </Box>
        </Box>
        {/* end of types grid */}

        {/* why virbusser grid */}
        <Box sx={classes.whyContainer}>
          <Typography component="h5">Why Virbusser?</Typography>
          <Box sx={classes.whyGrid}>
            <Box>
              <Typography paragraph>
                One stop shop for all things CFO, <span>and a little more</span>
              </Typography>
            </Box>
            <Box>
              <Typography paragraph>
                Trained finance & Accounting professionals <span>with</span>{" "}
                industry experience
              </Typography>
            </Box>
            <Box>
              <Typography paragraph>
                End-to-end landscape including payroll, InfoSec{" "}
                <span>and technology</span>
              </Typography>
            </Box>
            <Box>
              <Typography paragraph></Typography>
            </Box>
          </Box>
        </Box>
        {/* end of why virbusser */}

        {/* get in touch */}
        <Box sx={classes.getInTouch}>
          <Typography component="section">
            <h4>Get in touch with us</h4>
            <div>For more details get in touch with us</div>
          </Typography>
          <Button variant="contained">Contact</Button>
        </Box>

        {/* esteemed clients */}
        <Box sx={classes.clientsContainer}>
          <Typography paragraph>Esteemed Clients</Typography>
          <Box sx={classes.clientBox}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <AccountBalanceOutlined key={i} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const useStyles = (theme) => ({
  clientsContainer: {
    mt: 16,
    mb: 16,
    textAlign: "center",

    "& p": {
      fontSize: 38,
      fontWeight: "bold",
      color: "whitesmoke",
      mb: 8,
      [theme.breakpoints.down("md")]: {
        fontSize: 32,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: 26,
      },
    },
    [theme.breakpoints.down("md")]: {
      mb: 10,
    },
  },

  clientBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",

    "& svg": {
      fontSize: 65,
      color: colors.dimBg,
      mx: 3.5,
      my: 2,
    },
  },

  whyContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "& h5": {
      fontSize: 38,
      fontWeight: "bold",
      color: "whitesmoke",
      mb: 10,
      [theme.breakpoints.down("md")]: {
        fontSize: 34,
        mb: 7.5,
      },
    },
  },

  whyGrid: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 3,
    columnGap: 3,
    "& div": {
      width: 500,
      minHeight: 300,
      backgroundColor: colors.darkTile,
      borderRadius: 5,
      p: 5,
      display: "flex",
      alignItems: "flex-end",
      [theme.breakpoints.down("md")]: { width: 300, height: 275 },
      cursor: "pointer",

      "& p": {
        width: "80%",
        fontWeight: "bold",
        fontSize: 22,
        color: "whitesmoke",
        "& span": { color: colors.dimText },
      },
      "&:hover": {
        boxShadow: "inset 0px 0px 100px 125px rgba(0, 0, 0, 0.5)",
        transition: ".2s ease",
      },
      "&:nth-child(1):hover": {
        backgroundImage: "url('/assets/pexels-sora-shimazaki-5673488.jpg')",
        backgroundSize: "cover",
      },
      "&:nth-child(2):hover": {
        backgroundImage: "url('/assets/planning.jpg')",
        backgroundSize: "cover",
      },
      "&:nth-child(3):hover": {
        backgroundImage: "url('/assets/pexels-pixabay-326576.jpg')",
        backgroundSize: "cover",
      },
      "&:nth-child(4):hover": {
        backgroundImage: "url('/assets/pexels-andrea-piacquadio-3769021.jpg')",
        backgroundSize: "cover",
      },
    },
  },

  typesGridContainer: {
    mb: 20,
    columnGap: 3,
    rowGap: 3,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",

    "& div": {
      borderRadius: 5,
      backgroundColor: colors.darkTile,
      p: 5,
      fontWeight: "bold",
      fontSize: 20,
      color: "whitesmoke",
      minHeight: 300,
      width: 300,
      flexGrow: 1,
      position: "relative",
      "& h4": { width: 225, fontSize: 22.5, fontWeight: "bold" },
      "& p": {
        mt: 3.5,
        fontSize: 18,
        width: 275,
        color: colors.dimText,
        fontWeight: 400,
        lineHeight: 1.8,
      },
      "& img": {
        width: 150,
        height: "auto",
        position: "absolute",
        bottom: 0,
        right: 5,
      },

      "&:nth-child(2)": { "& img": { width: 300, right: -10 } },
      "&:nth-child(3)": { "& img": { width: 300, top: 0, right: 0 } },
      "&:nth-child(4)": { "& img": { width: "100%", bottom: 0, left: 0 } },
      "&:nth-child(5)": {
        "& img": { width: 200, bottom: 20, right: 20 },
        "& p": { width: 350 },
      },

      [theme.breakpoints.down("sm")]: {
        "& h4": { width: 200 },
        "& p": { width: 250, fontSize: 16 },
        "& img": { width: 125 },
        "&:nth-child(2)": { "& img": { width: 300, right: -25 } },
        "&:nth-child(5)": {
          "& img": { width: 125, bottom: 5, right: 5 },
          "& p": { width: 200 },
        },
      },
    },
  },

  getInTouch: {
    width: "100%",
    height: 400,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3e3f42",
    borderRadius: 4.5,
    mt: 16,
    "& section": {
      "& h4": {
        fontSize: 35,
        color: "whitesmoke",
      },
      "& div": {
        fontSize: 20,
        color: colors.dimText,
        mt: 2,
        mb: 4.5,
      },
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
      "& section": {
        textAlign: "center",
        "& h4": { fontSize: 24 },
        "& div": { fontSize: 16 },
      },
      "& button": { fontSize: 16 },
    },
  },
});

export default TypeGrid;
