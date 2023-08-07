import { useEffect } from 'react';
import ChatacterList from './components/ChatacterList';
import { useFetch, useCharactersFetch } from './utils/useFetch';
import Header from './components/Header';
import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';

const App = () => {

  const {
    characters, isLoading, error, fetchCharacters,
  } = useCharactersFetch();

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <Box
      sx={{
        background: grey[500]
      }}
    >
      <Header />
      {/* Search */}
      <ChatacterList charList={characters?.results} />
    </Box>
  )
};

export default App;