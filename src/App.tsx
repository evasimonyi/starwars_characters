import React, { Suspense, useEffect } from 'react';
import Header from './components/Header';
import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import { RootState } from './redux/store';
import { useAppDispatch } from './redux/reduxHooks';
import { useSelector } from 'react-redux'
import { fetchCharacters } from './redux/characterSlice';
import Sort from './components/Sort';

const ResultInfo = React.lazy(() => import('./components/ResultInfo'));
const ChatacterList = React.lazy(() => import('./components/ChatacterList'));
const CircularProgress = React.lazy(() => import('@mui/material/CircularProgress'));
const Search = React.lazy(() => import('./components/Search'));

export const URL = 'https://swapi.dev/api/people/'

const App = () => {
  const dispatch = useAppDispatch();
  const state = useSelector((state: RootState) => state.characters);
  const { characters, searchedCharacter, isLoading, error } = state;

  useEffect(() => {
    dispatch(fetchCharacters({ urlBase: URL }));
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Header />
      <Box
        sx={{
          background: grey[400],
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '1em',
          flex: 1,
          overflowY: 'auto',
          gap: '1em',
        }}
      >
        <Suspense fallback={<></>}>
          <Search />
          {isLoading && characters.length === 0 && (
            <Box sx={{ display: 'flex', margin: 'auto' }}>
              <CircularProgress />
            </Box>
          )}
          {!error && (
            <>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1em',
                  marginRight: 'auto',
                  pl: '4%'
                }}
              >
                {characters.length > 0 && (
                  <Sort />
                )}
                <ResultInfo />
              </Box>
              <ChatacterList />
            </>
          )}

        </Suspense>
      </Box>
    </Box >
  )
};

export default App;