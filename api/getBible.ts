import {apiV1Client} from './api-client';
import {Bible} from './api-types';

export type GetBibleApiResponse = {
  data: Bible;
};

/**
 * Retrieves the list of hosts from the API.
 *
 * @return {Promise<GetBibleApiResponse>} The response containing the list of hosts.
 */
export const getBible = async (
  bibleId: string,
): Promise<GetBibleApiResponse> => {
  try {
    const response = await apiV1Client.get<GetBibleApiResponse>(
      `/bibles/${bibleId}`,
    );
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
