/*
 * ---------------------------------------------------------------
 * ## DO NOT EDIT THIS FILE MANUALLY                            ##
 * ## THIS FILE WAS GENERATED VIA `yarn generate-api-types`     ##
 * ---------------------------------------------------------------
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Meta {
  fums: string;
  fumsId: string;
  fumsJsInclude: string;
  fumsJs: string;
  fumsNoScript: string;
}

export interface BibleSummary {
  id: string;
  dblId: string;
  abbreviation: string;
  abbreviationLocal: string;
  language: Language;
  countries: {
    id: string;
    name: string;
    nameLocal: string;
  }[];
  name: string;
  nameLocal: string;
  description: string;
  descriptionLocal: string;
  relatedDbl: string;
  type: string;
  /** @format date-time */
  updatedAt: string;
  audioBibles?: AudioBibleSummary[];
}

export interface AudioBibleSummary {
  id: string;
  name: string;
  nameLocal: string;
  description: string;
  descriptionLocal: string;
}

export interface Bible {
  id: string;
  dblId: string;
  abbreviation: string;
  abbreviationLocal: string;
  copyright: string;
  language: {
    id?: string;
    name?: string;
    nameLocal?: string;
    script?: string;
    scriptDirection?: string;
  };
  countries: {
    id: string;
    name: string;
    nameLocal: string;
  }[];
  name: string;
  nameLocal: string;
  description: string;
  descriptionLocal: string;
  info: string;
  type: string;
  /** @format date-time */
  updatedAt: string;
  relatedDbl: string;
  audioBibles: AudioBibleSummary[];
}

export interface Book {
  id: string;
  bibleId: string;
  abbreviation: string;
  name: string;
  nameLong: string;
  chapters?: ChapterSummary[];
}

export interface ChapterSummary {
  id: string;
  bibleId: string;
  number: string;
  bookId: string;
  reference: string;
}

export interface Chapter {
  id: string;
  bibleId: string;
  number: string;
  bookId: string;
  content: string;
  reference: string;
  verseCount: number;
  next?: {
    id?: string;
    bookId?: string;
    number?: string;
  };
  previous?: {
    id?: string;
    bookId?: string;
    number?: string;
  };
  copyright: string;
}

export interface Language {
  id: string;
  name: string;
  nameLocal: string;
  script: string;
  scriptDirection: string;
}

export interface Passage {
  id: string;
  bibleId: string;
  orgId: string;
  content: string;
  reference: string;
  verseCount: number;
  copyright: string;
}

export interface Verse {
  id: string;
  orgId: string;
  bibleId: string;
  bookId: string;
  chapterId: string;
  content: string;
  reference: string;
  verseCount: number;
  copyright: string;
  next?: {
    id?: string;
    bookId?: string;
  };
  previous?: {
    id?: string;
    bookId?: string;
  };
}

export interface SectionSummary {
  id: string;
  bibleId: string;
  bookId: string;
  title: string;
  firstVerseId: string;
  lastVerseId: string;
  firstVerseOrgId: string;
  lastVerseOrgId: string;
}

export interface Section {
  id: string;
  bibleId: string;
  bookId: string;
  chapterId: string;
  title: string;
  content: string;
  verseCount: number;
  firstVerseId: string;
  lastVerseId: string;
  firstVerseOrgId: string;
  lastVerseOrgId: string;
  copyright: string;
  next?: {
    id?: string;
    title?: string;
  };
  previous?: {
    id?: string;
    title?: string;
  };
}

export interface VerseSummary {
  id: string;
  orgId: string;
  bibleId: string;
  bookId: string;
  chapterId: string;
  reference: string;
}

export interface SearchVerse {
  id: string;
  orgId: string;
  bibleId: string;
  bookId: string;
  chapterId: string;
  text: string;
  reference?: string;
}

export interface SearchResponse {
  query: string;
  limit: number;
  offset: number;
  total: number;
  verseCount: number;
  verses: SearchVerse[];
  passages?: Passage[];
}

export interface AudioBible {
  id: string;
  dblId: string;
  abbreviation: string;
  abbreviationLocal: string;
  copyright: string;
  language: Language;
  countries: {
    id: string;
    name: string;
    nameLocal: string;
  }[];
  name: string;
  nameLocal: string;
  description: string;
  descriptionLocal: string;
  info: string;
  type: string;
  /** @format date-time */
  updatedAt: string;
  relatedDbl: string;
}

export interface AudioChapter {
  id: string;
  bibleId: string;
  number: string;
  bookId: string;
  resourceUrl: string;
  timecodes?: {
    end: string;
    start: string;
    verseId: string;
  }[];
  expiresAt: number;
  reference: string;
  next?: {
    id?: string;
    bookId?: string;
    number?: string;
  };
  previous?: {
    id?: string;
    bookId?: string;
    number?: string;
  };
  copyright?: string;
}
