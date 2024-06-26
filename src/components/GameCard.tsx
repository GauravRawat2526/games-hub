import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList'
import CreditScore from './CreditScore'
import getCroppedImageUrl from '../image-url'


function GameCard({game} : {game : Game}) {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl" >{game.name}</Heading>
        <HStack justify={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CreditScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard