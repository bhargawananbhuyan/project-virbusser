import { Container, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import colors from "../utils/myColors";

function Support() {
  const theme = useTheme();

  const classes = useStyles(theme);

  return (
    <Box sx={classes.root}>
      <Container maxWidth="xl" sx={classes.container}>
        {[1, 2, 3].map((i) => (
          <Box component="section">
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

            <Box sx={classes.serviceCard}>
              <Box
                sx={{
                  backgroundColor: colors.blurCard,
                  transform: "rotate(7.5deg)",
                }}
              />
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
        ))}
      </Container>
    </Box>
  );
}

const useStyles = (theme) => ({
  root: { display: "flex", justifyContent: "center", alignItems: "center" },
  container: {
    mt: 28.5,
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
      mb: 27.5,
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
      height: 375,
      width: 600,
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
