import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import colors from "../utils/myColors";

function Support() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Container maxWidth="xl" sx={{ mt: 27.5 }}>
        {[1, 2, 3].map((i) => (
          <Box
            sx={{
              mb: 27.5,
              display: "flex",
              flexDirection: i === 2 && "row-reverse",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ color: colors.lightGreen }}>
                — We provide more than
              </Typography>
              <Typography
                sx={{ fontSize: 30, color: "whitesmoke", fontWeight: "bold" }}
              >
                Support for people and stuff...
              </Typography>
              <Box sx={{ p: 3 }}>
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

            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  height: 375,
                  width: 600,
                  backgroundColor: colors.blurCard,
                  transform: "rotate(7.5deg)",
                  borderRadius: 4.5,
                }}
              />
              <Box
                sx={{
                  height: 375,
                  width: 600,
                  backgroundColor: colors.dimCard,
                  borderRadius: 4.5,
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

export default Support;
