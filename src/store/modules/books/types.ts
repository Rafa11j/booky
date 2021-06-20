import { DataEntry } from "react-minimal-pie-chart/types/commonTypes";

export interface IImageLink {
  smallThumbnail: string;
  thumbnail: string;
  small?: string;
  medium?: string;
  large?: string;
  extraLarge?: string;
}

export interface IReadingMode {
  text: boolean;
  image: boolean;
}

export interface IIndustryIdentifier {
  type: string;
  identifier: string;
}

export interface IVolumeInfo {
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  industryIdentifiers: IIndustryIdentifier[]
  readingModes: IReadingMode;
  pageCount: number;
  printType: string;
  categories: string[];
  averageRating: number;
  ratingsCount: number;
  language: string;
  imageLinks?: IImageLink
}

export interface IBookState {
  id: string;
  kind: string;
  etag: string;
  selfLink: string;
  volumeInfo: IVolumeInfo;
  isFavorite?: boolean;
}

export interface ISearchBookState {
  kind: string;
  totalItems: number;
  items: IBookState[];
  page: number;
}

export interface IApplicationBooks {
  searchBook: ISearchBookState;
  favoritesBooks: IBookState[];
  loading: boolean;
  searchValue: string;
  categories: DataEntry[];
}