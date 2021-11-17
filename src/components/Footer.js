import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import colors from "../utils/myColors";

function Footer() {
  const theme = useTheme();

  const classes = useStyles(theme);

  return (
    <Box component="footer" sx={classes.root}>
      <Typography sx={classes.logo}>
        {"VirBusSer".split("").map((i, index) => (
          <span
            style={{
              color: index % 3 === 0 ? colors.paleYellow : colors.lightGreen,
            }}
          >
            {i}
          </span>
        ))}
      </Typography>

      <Box sx={classes.itemsContainer}>
        {[1, 2, 3, 4].map((i) => (
          <Box />
        ))}
      </Box>
    </Box>
  );
}

const useStyles = (theme) => ({
  root: {
    backgroundColor: colors.bgLanding,
    display: "flex",
    justifyContent: "space-around",
    py: 5,
    px: 3,
    alignItems: "center",

    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
    },
  },

  logo: {
    fontSize: 32,
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      fontSize: 24,
      mb: 3.5,
    },
  },

  itemsContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    "& div": {
      backgroundColor: colors.bgPrimary,
      borderRadius: 3,
      height: 125,
      width: 125,
      mx: 1,
      [theme.breakpoints.down("lg")]: {
        mt: 5,
      },
      [theme.breakpoints.down("md")]: {
        mt: 2,
      },
    },
  },
});

export default Footer;
