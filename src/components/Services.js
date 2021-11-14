import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import colors from "../utils/myColors";

const ServiceGrid = () => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      columnGap: 3,
      justifyItems: "center",
    }}
  >
    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
      <Box
        key={i}
        sx={{
          height: 250,
          width: 250,
          backgroundColor: colors.darkTile,
          borderRadius: 3,
          mt: i % 3 === 0 ? -3.5 : (i + 1) % 3 === 0 ? 3.5 : 0,
        }}
      ></Box>
    ))}
  </Box>
);

const ClientsGrid = () => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      columnGap: 3,
      justifyItems: "center",
    }}
  >
    {[1, 2, 3, 4].map((i) => (
      <Box
        key={i}
        sx={{
          height: 350,
          width: 350,
          backgroundColor: colors.darkTile,
          borderRadius: 3,
          zIndex: 10,
          mt: -20,
        }}
      ></Box>
    ))}
  </Box>
);

function Services() {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ClientsGrid />
      </Box>

      <Container maxWidth="xl">
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", color: "whitesmoke", mt: 18, mb: 14 }}
        >
          Our Services
        </Typography>

        <Box sx={{ display: "flex" }}>
          <ServiceGrid />
          <Box sx={{ ml: 14.5 }}>
            <Typography
              sx={{
                fontSize: 30,
                fontWeight: "bold",
                color: "whitesmoke",
                mb: 4.5,
              }}
            >
              Budgeting & forecasting
            </Typography>
            {[1, 2, 3, 4].map((i) => (
              <Typography key={i} sx={{ fontSize: 24, py: 1.25, px: 4.5 }}>
                {`Point ${i}`}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Services;
