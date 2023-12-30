import { Passage, Verse } from "../api/api-types";

export type SermonNote = {
    id: string;
    title: string;
    content: string;
    date: string;
    passage: Passage;
    verseStart: Verse;
    verseEnd?: Verse;
  };