import { Container, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import colors from "../utils/myColors";

function MoreLess() {
  const theme = useTheme();

  const classes = useStyles(theme);

  return (
    <Box>
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", color: "whitesmoke", mt: 18, mb: 10 }}
        >
          What we do?
        </Typography>
      </Container>

      <Box sx={classes.moloGrid}>
        <Box
          sx={{
            gridRow: "1",
            gridColumn: "2/4",
            backgroundColor: colors.darkTile,
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
            p: 6.5,
            position: "relative",
            overflowX: "scroll",
            scrollbarWidth: "none",
            msOverflowStyle: "hidden",
            "&::-webkit-scrollbar": {
              width: 0,
              height: 0,
            },
          }}
        >
          <Typography
            sx={{
              fontSize: 30,
              fontWeight: "bold",
              color: colors.lightGreen,
              mb: 5,
              ml: 10,
            }}
          >
            more of
          </Typography>
          <Box
            sx={{
              display: "flex",
              position: "absolute",
              left: 75,
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <Box
                sx={{
                  width: 300,
                  height: 300,
                  backgroundColor: colors.dimBg,
                  mr: 5,
                  borderRadius: 3,
                }}
              />
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            gridRow: "2",
            gridColumn: "1/3",
            backgroundColor: colors.darkTile,
            textAlign: "right",
            p: 6.5,
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
            position: "relative",
            overflowX: "scroll",
            scrollbarWidth: "none",
            msOverflowStyle: "hidden",
            direction: "rtl",
            "&::-webkit-scrollbar": {
              width: 0,
              height: 0,
            },
          }}
        >
          <Typography
            sx={{
              fontSize: 30,
              fontWeight: "bold",
              color: colors.rRed,
              mb: 5,
              mr: 10,
            }}
          >
            less of
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              position: "absolute",
              right: 75,
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <Box
                sx={{
                  width: 300,
                  height: 300,
                  backgroundColor: colors.dimBg,
                  ml: 5,
                  borderRadius: 3,
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>

      {/* <Box
          sx={{
            width: "100vw",
            height: 500,
            backgroundColor: colors.darkTile,
            // ml: 10,
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
        /> */}
    </Box>
  );
}

const useStyles = (theme) => ({
  moloGrid: {
    display: "grid",
    gridTemplateColumns: "300px auto 300px",
    gridTemplateRows: "repeat(2, 525px)",
    rowGap: 12,
  },
});

export default MoreLess;
