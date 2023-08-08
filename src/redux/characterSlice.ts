import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { CharacterType } from '../components/Character.interface';

interface FetchCharactersArgs {
  urlBase?: string;
  searchedCharacter?: string;
  isFiltered?: boolean;
}

export const fetchCharacters = createAsyncThunk(
  'get-characters',
  async (args: FetchCharactersArgs) => {
    const { urlBase, searchedCharacter, isFiltered = false } = args;
    let url = new URL(urlBase);
    if (searchedCharacter !== null && typeof searchedCharacter === 'string') {
      url.searchParams.set('search', searchedCharacter);
    }
    try {
      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error('Error during fetch!');
      }
      const resultToState = await response.json();
      return { ...resultToState, isFiltered };
    } catch (error) {
      console.error('Error fetching characters:', error);
      return null;
    }
  }
);

export type SortAction = {
  type: 'charactersSort';
  payload: CharacterType[];
};

type StateType = {
  characters: CharacterType[],
  count: number,
  prev: string | null,
  next: string | null,
  searchedCharacter: string,
  isLoading: boolean,
  error: string,
}

const initialState: StateType = {
  characters: [],
  count: 0,
  prev: null,
  next: null,
  searchedCharacter: '',
  isLoading: false,
  error: '',
}

const characterSlice = createSlice({
  name: 'characters',
  initialState: initialState,
  reducers: {
    updateSearchedCharacter: (state, action) => {
      state.searchedCharacter = action.payload;
    },
    clearCharacters: (state) => {
      state.characters = [];
      state.count = 0;
      state.prev = null;
      state.next = null;
    },
    sortCharacters: (state, action: SortAction) => {
      state.characters = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        console.log(action);
        if (action.payload.isFiltered) {
          state.characters = action.payload.results;
        } else {
          state.characters = [...state.characters, ...action.payload.results];
        }
        state.count = action.payload.count;
        state.prev = action.payload.previous;
        state.next = action.payload.next;
        state.isLoading = false;
        state.error = '';
      })
      .addCase(fetchCharacters.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.characters = [];
        state.isLoading = false;
        state.error = action.error.message || 'An error happened during fetch.';
      })
  }
});

export const { updateSearchedCharacter, clearCharacters, sortCharacters } = characterSlice.actions;
export default characterSlice;
