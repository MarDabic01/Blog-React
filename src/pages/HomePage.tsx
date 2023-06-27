import { Grid, GridItem } from "@chakra-ui/layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <Grid templateAreas={`"nav" "main" "footer"`}>
      <GridItem area="nav">
        <Header />
      </GridItem>
      <GridItem area="main">Main</GridItem>
      <GridItem area="footer">
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
