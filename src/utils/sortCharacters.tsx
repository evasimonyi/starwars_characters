import { CharacterType } from "../components/Character.interface";

export enum SortOrder {
  Ascending = 'ascending',
  Descending = 'descending',
}

export const sortCharactersByName = (
  characters: CharacterType[],
  sortOrder: SortOrder = SortOrder.Ascending
): CharacterType[] => {
  const sortedCharacters = [...characters];

  // sortedCharacters.sort((a, b) => {
  //   const nameA = a.name.toLowerCase();
  //   const nameB = b.name.toLowerCase();

  //   if (sortOrder === SortOrder.Ascending) {
  //     return nameA.localeCompare(nameB);
  //   } else {
  //     return nameB.localeCompare(nameA);
  //   }
  // });

  return sortedCharacters;
};
