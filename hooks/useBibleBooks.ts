import {useQuery} from '@tanstack/react-query';
import { getBibleBooks } from '../api/getBibleBooks';
import {mockBooks} from "../mocks/mockBooks";
import { Book } from '../api/api-types';

export type BibleBooksResponse = {
    data: Book[];
}

export function useBibleBooksHook(bibleId: string = "06125adad2d5898a-01") {
//   return useQuery({queryKey: ['books'], queryFn: () => getBibleBooks(bibleId)});
return { data: mockBooks };
}