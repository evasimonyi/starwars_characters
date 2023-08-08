import { CharacterType } from "../components/Character.interface";

export interface FetchCharactersArgs {
  urlBase?: string;
  searchedCharacter?: string;
  isFiltered?: boolean;
}

export type SortAction = {
  type: 'charactersSort';
  payload: CharacterType[];
};

export type StateType = {
  characters: CharacterType[],
  count: number,
  prev: string | null,
  next: string | null,
  searchedCharacter: string,
  isLoading: boolean,
  error: string,
}