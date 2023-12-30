import { mockNotes } from "../mocks/mockNotes";
import { SermonNote } from "../types/notes";

export type LatestSermonNotes = {
  notes: SermonNote[];
};
export function useLatestSermonNotes(): LatestSermonNotes {
  return {
    notes: mockNotes.slice(0, 3),
  };
}
