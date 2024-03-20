import { HStack , Image , Text} from '@chakra-ui/react'
import logo from '../assets/cube_9514021.png';

function NavBar() {
  return (
    <HStack>
        <Image src={logo} boxSize='50px' borderRadius='full'/>
        <Text>Game-Hub</Text>
    </HStack>
  )
}

export default NavBar