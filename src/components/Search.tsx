import { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import { yellow } from '@mui/material/colors';
import { useAppDispatch } from '../redux/reduxHooks';
// import { fetchCharacters, clearCharacters } from '../redux/characterSlice';
import { URL } from '../App';

const Search = () => {
  const [value, setValue] = useState('');

  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    // dispatch(clearCharacters());
    // if (value) {
    //   dispatch(fetchCharacters({ urlBase: URL, searchedCharacter: value, isFiltered: true }));
    // } else {
    //   dispatch(fetchCharacters({ urlBase: URL }));
    // }
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '60%',
        alignItems: 'center',
        gap: '1em',
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        label="Search character"
        variant="standard"
        sx={{
          width: '100%'
        }}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button
        variant="contained"
        onClick={handleSubmit}
        sx={{
          backgroundColor: yellow[500],
          color: 'black',
          width: 'fit-content',
          margin: 'auto',
        }}
      >
        Search character
      </Button>
    </Box>
  );
}

export default Search;