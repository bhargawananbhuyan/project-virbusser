import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import colors from "../utils/myColors";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: colors.bgLanding,
        display: "flex",
        justifyContent: "space-around",
        py: 5,
        px: 3,
        alignItems: "center",
      }}
    >
      <Typography sx={{ fontSize: 32, fontWeight: "bold" }}>
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

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 125px)",
          gridTemplateRows: "125px",
          "& div": {
            backgroundColor: colors.bgPrimary,
            borderRadius: 3,
          },
          columnGap: 3,
        }}
      >
        {[1, 2, 3, 4].map((i) => (
          <Box />
        ))}
      </Box>
    </Box>
  );
}

export default Footer;
