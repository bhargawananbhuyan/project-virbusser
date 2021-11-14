import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import colors from "../utils/myColors";

function Landing() {
  return (
    <Box
      sx={{
        backgroundColor: colors.bgLanding,
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            maxWidth: 500,
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: 42,
              color: "whitesmoke",
              fontWeight: "bold",
              lineHeight: 1.35,
            }}
          >
            One Stop Solution for all your CFO needs
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: 22,
              color: colors.dimText,
              mt: 4,
              mb: 6.5,
            }}
          >
            Enabling entrepreneurs to focus on business, leave finance support
            functions to trained professionals.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: colors.paleYellow,
              textTransform: "capitalize",
              fontSize: 18,
              px: 2.5,
              color: colors.bgLanding,
              fontFamily: "'Roboto', sans-serif !important",
              "&:hover": { backgroundColor: colors.paleYellow },
            }}
          >
            Get started
          </Button>
        </Box>

        <Box sx={{ maxWidth: 600, width: "100%" }}>
          <img src={"/assets/vbs-pic.svg"} width="100%" alt="" />
        </Box>
      </Container>
    </Box>
  );
}

export default Landing;
