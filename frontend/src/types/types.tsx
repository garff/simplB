export interface IGetData<T> {
  GET: () => Promise<T>;
}

export type Post = {
  file_name: string;
  content: string;
};

export type Posts = [Post];
