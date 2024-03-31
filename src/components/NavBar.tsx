import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/cube_9514021.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props{
  onSearch : (searchText : string) => void
}

function NavBar({onSearch} : Props) {
  return (
    <HStack>
      <Image src={logo} boxSize="50px" borderRadius="full" />
      <Text fontSize="20px" whiteSpace="nowrap">
        Game Hub
      </Text>
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
}

export default NavBar;
