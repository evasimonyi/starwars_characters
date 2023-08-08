import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Box, Typography } from "@mui/material";

const ResultInfo = () => {
  const state = useSelector((state: RootState) => state.characters);
  const { isLoading, characters, count } = state;

  return (
    <>
      {count > 0 && (
        <Typography variant="h5" component="p">
          Showing {characters.length} of {count} {count === 1 ? 'result' : 'results'}
        </Typography>
      )}
      {!isLoading && count === 0 && (
        <Typography variant="h5" component="p">
          No result to show!
        </Typography>
      )}
    </>
  )
}

export default ResultInfo;