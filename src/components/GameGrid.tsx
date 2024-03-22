import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeletion from "./GameCardSkeletion";
import GameCardContainer from "./GameCardContainer";

function GameGrid() {
  const { data, error, isLoading } = useGames();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 91, 32, 922];
  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        padding="10px"
        columns={{ sm: 1, md: 2, lg: 3, xl: 4}}
        spacing={10}
      >
        {isLoading &&
          skeleton.map((s) => (
            <GameCardContainer key={s}>
              {" "}
              <GameCardSkeletion  />{" "}
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
