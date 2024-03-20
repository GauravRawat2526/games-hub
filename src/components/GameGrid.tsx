import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

function GameGrid() {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid padding='15px' columns={{sm:1 , md:2 , lg:3 , xl:4}} spacing={10}>
      {games.map((game) => (
          <GameCard game={game}/>
        ))}
      </SimpleGrid>
       
      
    </>
  );
}

export default GameGrid;