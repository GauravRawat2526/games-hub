import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeletion from "./GameCardSkeletion";

function GameGrid() {
  const { games, error , isLoading} = useGames();
  const skeleton = [1,2,3,4,5,6,7,8,9,9,9,9];
  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid padding='15px' columns={{sm:1 , md:2 , lg:3 , xl:4 ,"2xl":5}} spacing={10}>
      {isLoading && skeleton.map(s => <GameCardSkeletion key={s}/>)}
      {games.map((game) => (
          <GameCard game={game}/>
        ))}
      </SimpleGrid>
       
      
    </>
  );
}

export default GameGrid;
