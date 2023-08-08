import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material"
import React from "react";
import { SortOrder, sortCharactersByName } from "../utils/sortCharacters";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Sort = () => {
  const [value, setValue] = React.useState('');

  const state = useSelector((state: RootState) => state.characters);
  const { characters } = state;

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
    const sorted = sortCharactersByName(characters, value as SortOrder);
    console.log(sorted);
  };

  return (
    <FormControl>
      <InputLabel>Age</InputLabel>
      <Select
        value={value}
        label="Sort"
        onChange={handleChange}
      >
        <MenuItem value='descending'>A-Z</MenuItem>
        <MenuItem value='ascending'>Z-A</MenuItem>
      </Select>
    </FormControl>
  )
}

export default Sort;