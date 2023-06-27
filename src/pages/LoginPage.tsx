import { Flex, GridItem, Image } from "@chakra-ui/react";

import Background from "../assets/images/authBackground.webp";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <>
      <Flex
        width="100vw"
        h="100vh"
        flexDirection={{ base: "column", md: "row" }}
      >
        <GridItem
          w={{ base: "100%", md: "60%" }}
          backgroundColor="gray"
          area={"image"}
        >
          <Image
            width="100%"
            height="100%"
            objectFit="cover"
            src={Background}
          />
        </GridItem>
        <GridItem w={{ base: "100%", md: "40%" }}>
          <LoginForm />
        </GridItem>
      </Flex>
    </>
  );
};

export default LoginPage;
