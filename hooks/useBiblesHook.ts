import {useQuery} from '@tanstack/react-query';
import {getBibles} from '../api/getBibles';

export function useBiblesHook() {
  return useQuery({queryKey: ['bibles'], queryFn: () => getBibles()});
}
