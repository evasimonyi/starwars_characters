import { useMemo } from "react";
import { CharacterType } from "./Character.interface";
import CharacterCard from "./CharacterCard";
import { getImage } from "../utils/getImage";
import { Grid } from "@mui/material";

const ChatacterList = (props: { charList: CharacterType[] }) => {
  const { charList } = props;

  const characters = useMemo(() => (
    charList?.map((character: CharacterType, index) => {
      const imagePath = getImage(index);
      return (
        <Grid item xs={12} md={6} lg={4} xl={3}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            '& .MuiGrid-root>.MuiGrid-item': {
              padding: 0,
            }
          }}
        >
          <CharacterCard character={character} image={imagePath} />
        </Grid>
      )
    }
    )
  ), [charList]);

  return (
    <Grid
      container
      spacing={2}
      justifyContent="space-between"
      sx={{
        margin: 0,
        width: '100%'
      }}
    >
      {characters}
    </Grid>
  )
}

export default ChatacterList;
