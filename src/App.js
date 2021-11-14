import { Box } from "@mui/system";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import MoreLess from "./components/MoreLess";
import Services from "./components/Services";
import Support from "./components/Support";
import TypeGrid from "./components/TypeGrid";

function App() {
  return (
    <Box className="app">
      <Landing />
      <Services />
      <MoreLess />
      <Support />
      <TypeGrid />
      <Footer />
    </Box>
  );
}

export default App;
