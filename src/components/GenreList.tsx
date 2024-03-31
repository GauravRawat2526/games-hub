import {
  HStack,
  List,
  ListItem,
  Image,
  Button,
  Spinner,
  Heading,
} from "@chakra-ui/react";
import useGeners, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../image-url";

const GenreList = ({
  onSelectGenre,
  selectedGenre,
}: {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}) => {
  const { isLoading, data } = useGeners();

  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
      {isLoading && <Spinner />}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                objectFit='cover'
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace='normal'
                textAlign='left'
                fontSize="md"
                variant="link"
                color={genre === selectedGenre ? "red" : ""}
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
