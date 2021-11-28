import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import colors from "../utils/myColors";
import Fade from "react-reveal/Fade";

function ServiceElem({ title, img, hImg, handleClick }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  let [hovered, setHovered] = useState(false);

  return (
    <Fade bottom>
      <Box
        component="div"
        sx={classes.serviceGridElement}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
        onClick={handleClick}
      >
        <Box component="section">
          <div>
            <img
              src={`/assets/Virbusser website-${hovered ? hImg : img}.png`}
              alt=""
            />
          </div>
          <Typography paragraph>{title}</Typography>
        </Box>
      </Box>
    </Fade>
  );
}

const useStyles = (theme) => ({
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
});

export default ServiceElem;
