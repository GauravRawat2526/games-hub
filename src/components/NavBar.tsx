import { HStack , Image, Text} from '@chakra-ui/react'
import logo from '../assets/cube_9514021.png';
import ColorModeSwitch from './ColorModeSwitch';

function NavBar() {
  return (
    <HStack justifyContent='space-between'>
        <HStack>
         <Image src={logo} boxSize='50px' borderRadius='full'/>
          <Text fontSize='20px'>Game Hub</Text>
        </HStack>
        <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  )
}

export default NavBar