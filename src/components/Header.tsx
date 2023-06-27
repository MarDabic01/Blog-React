import { HStack } from "@chakra-ui/layout";
import {
  Button,
  Image,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import "../css/header.css";
import hamburgerMenu from "../assets/icons/hamburgerMenu.png";
import logo from "../assets/icons/logo.png";

const Header = () => {
  return (
    <HStack gap={0} paddingX={5} paddingY={1} shadow="lg">
      <HStack w="50%" gap={0}>
        <Image src={hamburgerMenu} boxSize="50px" />
        <Image src={logo} boxSize="50px" />
      </HStack>
      <HStack w="50%" justifyContent="flex-end" gap={2}>
        <InputGroup w="50%" justifyContent="flex-end">
          <Input
            placeholder="Pretrazujte"
            w="50%"
            borderRadius="25px"
            className="header-input"
          />
          <InputRightElement>
            <SearchIcon color="gray.300" />
          </InputRightElement>
        </InputGroup>
        <Button
          bg="#011D26"
          color="white"
          borderRadius="25px"
          _hover={{}}
          _active={{}}
          className="header-button"
        >
          Prijavi se
        </Button>
        <Button
          bg="#BDBDFC"
          color="#011D26"
          borderRadius="25px"
          _hover={{}}
          _active={{}}
          className="header-button"
        >
          Registruj se
        </Button>
      </HStack>
    </HStack>
  );
};

export default Header;
