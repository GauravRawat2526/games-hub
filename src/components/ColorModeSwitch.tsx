import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react"

function ColorModeSwitch() {
const {toggleColorMode , colorMode} = useColorMode();

  return (
    <div>
        <HStack>
            <Switch colorScheme='green' isChecked={colorMode == 'dark'} onChange={toggleColorMode}></Switch>
            <Text></Text>
        </HStack>
    </div>
  )
}

export default ColorModeSwitch