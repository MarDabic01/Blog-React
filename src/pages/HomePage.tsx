import { Grid, GridItem } from "@chakra-ui/layout";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <Grid templateAreas={`"nav" "main"`}>
      <GridItem area="nav">
        <Header />
      </GridItem>
      <GridItem area="main">Main</GridItem>
    </Grid>
  );
};

export default HomePage;
