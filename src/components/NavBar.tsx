import { HStack , Image} from '@chakra-ui/react'
import logo from '../assets/cube_9514021.png';
import ColorModeSwitch from './ColorModeSwitch';

function NavBar() {
  return (
    <HStack justifyContent='space-between'>
        <Image src={logo} boxSize='50px' borderRadius='full'/>
        <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  )
}

export default NavBar