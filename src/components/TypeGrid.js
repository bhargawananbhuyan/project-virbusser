import { AccountBalanceOutlined } from "@mui/icons-material";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import colors from "../utils/myColors";

const TypesGrid = () => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 300px)",
      gridTemplateRows: "repeat(3, 300px)",
      columnGap: 3,
      rowGap: 3,
      mb: 20,

      "& div": {
        borderRadius: 5,
        backgroundColor: colors.darkTile,
        p: 5,
        fontWeight: "bold",
        fontSize: 20,
        color: "whitesmoke",
      },
    }}
  >
    <Box
      sx={{
        gridRow: "1",
        gridColumn: "1",
      }}
    >
      Mobile Enhancement
    </Box>
    <Box
      sx={{
        gridRow: "1",
        gridColumn: "2",
      }}
    >
      Infrastructure
    </Box>
    <Box
      sx={{
        gridRow: "1/3",
        gridColumn: "3/6",
      }}
    >
      Workflow tracking & Document management
    </Box>
    <Box
      sx={{
        gridRow: "2",
        gridColumn: "1/3",
      }}
    >
      ERP & Accounting tools support
    </Box>
    <Box
      sx={{
        gridRow: "3",
        gridColumn: "1/6",
      }}
    >
      Low cost automation
    </Box>
  </Box>
);

const WhyGrid = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <Typography
      sx={{ fontSize: 38, fontWeight: "bold", color: "whitesmoke", mb: 10 }}
    >
      Why Virbusser?
    </Typography>
    <Box
      sx={{
        display: "grid",
        gridTemplateRows: "repeat(2, 300px)",
        gridTemplateColumns: "repeat(2, 500px)",
        rowGap: 10,
        columnGap: 10,
        "& div": {
          backgroundColor: colors.darkTile,
          borderRadius: 5,
        },
      }}
    >
      {[1, 2, 3, 4].map((i) => (
        <Box key={i} />
      ))}
    </Box>
  </Box>
);

const EsteedmedClients = () => (
  <Box sx={{ mt: 20, mb: 16, textAlign: "center" }}>
    <Typography
      sx={{ fontSize: 38, fontWeight: "bold", color: "whitesmoke", mb: 10 }}
    >
      Esteemed Clients
    </Typography>

    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        placeItems: "center",
      }}
    >
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <AccountBalanceOutlined sx={{ fontSize: 65, color: colors.dimBg }} />
      ))}
    </Box>
  </Box>
);

function TypeGrid() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            height: 400,
            width: "100%",
            backgroundColor: colors.darkTile,
            borderRadius: 5,
            mb: 20,
          }}
        />

        <TypesGrid />

        <WhyGrid />

        <EsteedmedClients />
      </Container>
    </Box>
  );
}

export default TypeGrid;
