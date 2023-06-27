import { HStack, Stack } from "@chakra-ui/layout";
import { Image, Text } from "@chakra-ui/react";
import logo from "../assets/icons/logoWhite.png";
import poweredBy from "../assets/icons/itEngineLogo.png";

const Footer = () => {
  return (
    <Stack bg="#011D26" gap={0}>
      <HStack padding={5} borderBottom="1px solid white">
        <Image src={logo} boxSize="50px" />
        <Stack
          width="100%"
          color="white"
          padding={5}
          fontWeight="light"
          gap={3}
        >
          <HStack w="100%" justifyContent="space-between">
            <Text>Kategorija 1</Text>
            <Text>Kategorija 2</Text>
            <Text>Kategorija 3</Text>
            <Text>Kategorija 4</Text>
            <Text>Kategorija 5</Text>
          </HStack>
          <HStack w="100%" justifyContent="space-between">
            <Text>Kategorija 1</Text>
            <Text>Kategorija 2</Text>
            <Text>Kategorija 3</Text>
            <Text>Kategorija 4</Text>
            <Text>Kategorija 5</Text>
          </HStack>
          <HStack w="100%" justifyContent="space-between">
            <Text>Kategorija 1</Text>
            <Text>Kategorija 2</Text>
            <Text>Kategorija 3</Text>
            <Text>Kategorija 4</Text>
            <Text>Kategorija 5</Text>
          </HStack>
        </Stack>
      </HStack>
      <HStack
        color="white"
        padding={5}
        fontWeight="light"
        justifyContent="space-between"
      >
        <HStack w="40%" justifyContent="space-between">
          <Text>Terms and conditions</Text>
          <Text>Cookie policy</Text>
          <Text>Security policy</Text>
        </HStack>
        <Image boxSize="60px" src={poweredBy} />
      </HStack>
    </Stack>
  );
};

export default Footer;
