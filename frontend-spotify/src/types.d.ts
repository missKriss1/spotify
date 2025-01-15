export interface Artists{
  _id: string;
  name: string;
  image: string;
  information: string;
}

export interface Album{
  _id: string;
  title: string;
  artist: Artists;
  date: number;
  image: string;
}

export interface Track{
  _id: string;
  title: string;
  album: Album;
  continuance: string;
  number: number;
}