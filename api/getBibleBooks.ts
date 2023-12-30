import axios from 'axios';
import {apiV1Client} from './api-client';
import {Book} from './api-types';

export type GetBibleBooksApiResponse = {
  data: Book[];
};


export const getBibleBooks = async (
  bibleId: string,
): Promise<GetBibleBooksApiResponse> => {
  try {
    const response = await axios.get<GetBibleBooksApiResponse>(
      `https://api.scripture.api.bible/v1/bibles/06125adad2d5898a-01/books?include-chapters=true&include-chapters-and-sections=true`,
    );
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
