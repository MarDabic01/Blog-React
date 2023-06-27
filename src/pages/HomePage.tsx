import { Grid, GridItem } from "@chakra-ui/layout";

const HomePage = () => {
  return (
    <Grid templateAreas={`"nav" "main"`}>
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      <GridItem area="main" bg="gold">
        Main
      </GridItem>
    </Grid>
  );
};

export default HomePage;
