import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";
import { GameQuery } from "../App";

interface Props{
    onSelectPlatform : (platform : Platform) => void,
    gameQuery : GameQuery
}
function PlatformSelector({onSelectPlatform , gameQuery} : Props) {

  const {data , error} = usePlatforms();
  
  if(error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        {gameQuery.platform?.name || 'Platform'}
      </MenuButton>
      <MenuList>
       {data.map(platform => <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
