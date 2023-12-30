import {useQuery} from '@tanstack/react-query';
import {getBible} from '../api/getBible';

export function useBibleHook(bibleId: string) {
  return useQuery({queryKey: ['bible'], queryFn: () => getBible(bibleId)});
}
