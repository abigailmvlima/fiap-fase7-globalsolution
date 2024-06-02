export type TListMovie = {
  title: string;
  category: {
    title: string;
    id: string;
  },
  note: string;
  duration: string;
  sinopsis: string;
  image?: string;
  [key: string]: any;
};
