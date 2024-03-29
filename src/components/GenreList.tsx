import { HStack, List, ListItem, Image , Button, Spinner } from "@chakra-ui/react";
import useGeners, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../image-url";

const GenreList = ({onSelectGenre , selectedGenre} : {onSelectGenre : (genre : Genre) => void  , selectedGenre : Genre | null}) => {
  const { isLoading, data, error } = useGeners();

  return (
    <>
    {isLoading && <Spinner />}
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image boxSize="32px"  borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
            <Button fontSize="md" variant="link" color={genre === selectedGenre ? 'red' : ''} onClick={() => onSelectGenre(genre)}>{genre.name.split(" ")[0]}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};

export default GenreList;
