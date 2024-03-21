import { Badge } from "@chakra-ui/react"


function CreditScore({score} : {score : number}) {

  let color = score > 75 ? 'green' : score > 60 ? 'yellow' : ' '; 
  return (
    <Badge fontSize='14px' borderRadius="4px" paddingX={2} colorScheme={color}>{score}</Badge>
  )
}

export default CreditScore