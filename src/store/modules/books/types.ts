export interface IImageLink {
  smallThumbnail: string;
  thumbnail: string;
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
}

export interface ISearchBookState {
  kind: string;
  totalItems: number;
  items: IBookState[];
}