import { Container, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import colors from "../utils/myColors";
import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";
import { useLayoutEffect, useRef, useState } from "react";

function Support() {
  const theme = useTheme();

  const rootRef = useRef();
  let [rotateAnim, setRotateAnim] = useState(-100);

  useLayoutEffect(() => {
    document.addEventListener("scroll", () => {
      const top = rootRef.current?.getBoundingClientRect().top;
      if (top < 750) {
        setRotateAnim(-350);
      } else {
        setRotateAnim(-100);
      }
    });
  }, []);

  const classes = useStyles(theme);

  return (
    <Box sx={classes.root}>
      <Container maxWidth="xl" sx={classes.container}>
        <Box component="section">
          <Fade left>
            <Box>
              <Typography component="h6" sx={{ color: colors.lightGreen }}>
                — We provide more than
              </Typography>
              <Typography
                sx={{ fontSize: 30, color: "whitesmoke", fontWeight: "bold" }}
              >
                Support for people and stuff...
              </Typography>
              <Box component="section" sx={{ p: 3 }}>
                {[
                  "PF monthly filings",
                  "ESI monthly filings",
                  "Payroll structuring",
                  "TDS Computations",
                  "Staffing & book keeping team",
                ].map((s, i) => (
                  <Typography
                    key={i}
                    sx={{ py: 1, fontSize: 18, color: colors.dimText }}
                  >
                    {s}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Fade>

          <Box sx={classes.serviceCard}>
            <Reveal effect="rotateFromRight" duration={1000}>
              <Box
                sx={{
                  backgroundColor: colors.blurCard,
                  transform: "rotate(7.5deg)",
                }}
              />
            </Reveal>
            <Box
              sx={{
                backgroundColor: colors.dimCard,
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 9,
              }}
            />
          </Box>
        </Box>

        <Box
          ref={rootRef}
          component="section"
          sx={{
            position: "relative",
            "& img:first-child": {
              width: 250,
              position: "absolute",
              top: -250,
              right: rotateAnim,
              transition: "all .75s ease-in",
              zIndex: -1,
            },
            "& img:nth-child(2)": {
              width: 200,
              position: "absolute",
              bottom: -250,
              left: rotateAnim,
              transition: "all .75s ease-in",
              zIndex: -1,
            },
          }}
        >
          <img src={"/assets/Virbusser website-42.png"} alt="" />
          <img src={"/assets/Virbusser website-41.png"} alt="" />
          <Fade left>
            <Box>
              <Typography component="h6" sx={{ color: colors.lightGreen }}>
                — We provide more than
              </Typography>
              <Typography
                sx={{ fontSize: 30, color: "whitesmoke", fontWeight: "bold" }}
              >
                Support for people and stuff...
              </Typography>
              <Box component="section" sx={{ p: 3 }}>
                {[
                  "PF monthly filings",
                  "ESI monthly filings",
                  "Payroll structuring",
                  "TDS Computations",
                  "Staffing & book keeping team",
                ].map((s, i) => (
                  <Typography
                    key={i}
                    sx={{ py: 1, fontSize: 18, color: colors.dimText }}
                  >
                    {s}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Fade>

          <Box sx={classes.serviceCard}>
            <Reveal effect="rotateFromRight" duration={1000}>
              <Box
                sx={{
                  backgroundColor: colors.blurCard,
                  transform: "rotate(7.5deg)",
                }}
              />
            </Reveal>
            <Box
              sx={{
                backgroundColor: colors.dimCard,
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 9,
              }}
            />
          </Box>
        </Box>

        <Box component="section">
          <Fade left>
            <Box>
              <Typography component="h6" sx={{ color: colors.lightGreen }}>
                — We provide more than
              </Typography>
              <Typography
                sx={{ fontSize: 30, color: "whitesmoke", fontWeight: "bold" }}
              >
                Support for people and stuff...
              </Typography>
              <Box component="section" sx={{ p: 3 }}>
                {[
                  "PF monthly filings",
                  "ESI monthly filings",
                  "Payroll structuring",
                  "TDS Computations",
                  "Staffing & book keeping team",
                ].map((s, i) => (
                  <Typography
                    key={i}
                    sx={{ py: 1, fontSize: 18, color: colors.dimText }}
                  >
                    {s}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Fade>

          <Box sx={classes.serviceCard}>
            <Reveal effect="rotateFromRight" duration={1000}>
              <Box
                sx={{
                  backgroundColor: colors.blurCard,
                  transform: "rotate(7.5deg)",
                }}
              />
            </Reveal>
            <Box
              sx={{
                backgroundColor: colors.dimCard,
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 9,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const useStyles = (theme) => ({
  root: { display: "flex", justifyContent: "center", alignItems: "center" },
  container: {
    mt: 32,
    mx: 5,
    [theme.breakpoints.down("md")]: {
      mt: 16,
    },
    [theme.breakpoints.down("lg")]: {
      mt: 18,
    },
    [theme.breakpoints.down("xl")]: {
      mt: 20,
    },

    "& section": {
      mb: 35,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      "&:nth-child(2)": {
        flexDirection: "row-reverse",
        [theme.breakpoints.down("lg")]: {
          flexDirection: "column-reverse",
          textAlign: "left",
        },
      },

      [theme.breakpoints.down("lg")]: {
        flexDirection: "column-reverse",
        textAlign: "left",
        mb: 7.5,
      },

      "& h6": {
        fontSize: 20,
        [theme.breakpoints.down("md")]: {
          fontSize: 16,
        },
      },

      "& section": {
        mb: 4.5,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      },
    },
  },

  serviceCard: {
    position: "relative",

    "& div": {
      height: 400,
      width: 650,
      borderRadius: 4.5,
      [theme.breakpoints.down("sm")]: {
        width: 300,
        height: 300,
        mb: 7.5,
      },
      [theme.breakpoints.between("sm", "md")]: {
        width: 400,
        height: 400,
        mb: 12.5,
      },
      [theme.breakpoints.between("md", "lg")]: {
        mb: 14.5,
      },
      [theme.breakpoints.between("lg", "xl")]: {
        width: 450,
        height: 400,
      },
    },
  },
});

export default Support;
