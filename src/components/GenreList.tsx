import { Text } from '@chakra-ui/react';
import useGeners from '../hooks/useGenres'

const GenreList = () => {

  const {isLoading , data , error} = useGeners();

  return (
    <>
        {data.map(genre => <Text>{genre.name}</Text>)}
    </>
  )
}

export default GenreList