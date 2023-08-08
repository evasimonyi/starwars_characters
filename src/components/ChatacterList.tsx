import { useMemo } from "react";
import { CharacterType } from "./Character.interface";
import CharacterCard from "./CharacterCard";
import { getImage } from "../utils/getImage";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Grid } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import { useAppDispatch } from "../redux/reduxHooks";
import { fetchCharacters } from "../redux/characterSlice";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { yellow } from "@mui/material/colors";

const ChatacterList = () => {
  const dispatch = useAppDispatch();

  const state = useSelector((state: RootState) => state.characters);
  const { characters, searchedCharacter, next, count, error, isLoading } = state;

  const handleShowMore = () => {
    if (searchedCharacter) {
      dispatch(fetchCharacters({ urlBase: next, searchedCharacter }));
    } else {
      dispatch(fetchCharacters({ urlBase: next }));
    }
  };

  const charList = useMemo(() => (
    characters?.map((character: CharacterType, index) => {
      const imagePath = getImage(index);
      return (
        <Grid item xs={12} md={6} lg={4} xl={3}
          key={character.name}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <CharacterCard character={character} image={imagePath} />
        </Grid>
      )
    })
  ), [characters]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '1em',
        width: '100%',
      }}
    >
      <Grid
        container
        sx={{
          margin: 0,
          justifyContent: 'flex-start',
          maxWidth: '100%',
          rowGap: '2em',
          '& .MuiGrid-item': {
            padding: '0 !important',
          }
        }}
      >
        {charList}
      </Grid>
      {!error && count !== 0 && characters.length !== count && (
        <LoadingButton
          loading={isLoading}
          loadingPosition="start"
          startIcon={<ExpandMoreIcon />}
          variant="outlined"
          onClick={handleShowMore}
          sx={{
            backgroundColor: yellow[500],
            color: 'black',
            width: 'fit-content',
            margin: 'auto',
          }}
        >
          Show more
        </LoadingButton>
      )}
    </Box>
  )
}

export default ChatacterList;