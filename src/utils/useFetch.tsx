import { useCallback, useState } from 'react';
import { CharacterType } from '../components/Character.interface';

export type ResultType = {
  count: number,
  results: CharacterType[],
  next: string | null,
  previous: string | null,
}

export const useFetch = () => {
  const [data, setData] = useState<ResultType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  console.log(data);

  const fetchMethod = useCallback(async (path: string) => {
    setError('');
    setIsLoading(true);
    try {
      const response = await fetch(path)
        .then((response) => response.json())
        .catch((error) => new Error(error));
      setData(response);
    } catch (error: any) {
      setError(error?.metadata?.message ?? '');
    } finally {
      setIsLoading(false);
    }
  }, []);
  return {
    data, isLoading, error, fetchMethod
  };
};

export const useCharactersFetch = () => {
  const {
    data, isLoading, error, fetchMethod,
  } = useFetch();
  const fetchCharacters = useCallback(async () => fetchMethod('https://swapi.dev/api/people/'), []);
  return {
    characters: data, isLoading, error, fetchCharacters
  };
};
