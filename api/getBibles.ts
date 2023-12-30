import {apiV1Client} from './api-client';
import {BibleSummary} from './api-types';

export type GetBiblesApiResponse = {
  data: BibleSummary[];
};

/**
 * Retrieves the list of hosts from the API.
 *
 * @return {Promise<GetBiblesApiResponse>} The response containing the list of hosts.
 */
export const getBibles = async (): Promise<GetBiblesApiResponse> => {
  try {
    const response = await apiV1Client.get<GetBiblesApiResponse>('/bibles');
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
