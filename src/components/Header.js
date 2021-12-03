import { Container, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import colors from "../utils/myColors";

function Header() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box component="header" sx={classes.root}>
      <Container sx={classes.content} maxWidth="xl">
        <a href="/" style={classes.logo}>
          <img
            src={"/assets/Virbusser website-40.png"}
            width={150}
            alt="virbusser_logo"
          />
        </a>

        <nav>
          <a href="/">Home</a>
          <a href="#services">Services</a>
          <a href="#why-us">Why us?</a>
          <a href="#contact">Contact</a>
        </nav>
      </Container>
    </Box>
  );
}

const useStyles = (theme) => ({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: colors.bgPrimary,
    zIndex: 100,
    boxShadow: "0px 0px 15px -10px rgb(0,0,0,.5)",

    "& nav a": {
      color: "whitesmoke",
      textDecoration: "none",
      mx: 3.5,
      fontSize: 18,
      "&:last-child": {
        mr: 0,
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
});

export default Header;
