import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material"
import React from "react";
import { SortOrder, sortCharactersByName } from "../utils/sortCharacters";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useAppDispatch } from "../redux/reduxHooks";
import { sortCharacters } from "../redux/characterSlice";

const Sort = () => {
  const [value, setValue] = React.useState('');
  const dispatch = useAppDispatch();
  const state = useSelector((state: RootState) => state.characters);
  const { characters } = state;

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
    if (event.target.value) {
      const sorted = sortCharactersByName(characters, event.target.value as SortOrder);
      dispatch(sortCharacters(sorted));
    }
  };

  return (
    <FormControl sx={{ width: '100px' }}>
      <InputLabel>Sort</InputLabel>
      <Select
        value={value}
        label="Sort"
        onChange={handleChange}
      >
        <MenuItem value='ascending'>A-Z</MenuItem>
        <MenuItem value='descending'>Z-A</MenuItem>
      </Select>
    </FormControl>
  )
}

export default Sort;