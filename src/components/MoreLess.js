import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import colors from "../utils/myColors";

function MoreLess() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", color: "whitesmoke", mt: 18, mb: 10 }}
        >
          What we do?
        </Typography>

        <Box
          sx={{
            width: "100vw",
            height: 500,
            backgroundColor: colors.darkTile,
            ml: 10,
            mb: 12,
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
          }}
        />

        <Box
          sx={{
            width: "100vw",
            height: 500,
            backgroundColor: colors.darkTile,
            ml: -65,
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
          }}
        />
      </Container>
    </Box>
  );
}

export default MoreLess;
