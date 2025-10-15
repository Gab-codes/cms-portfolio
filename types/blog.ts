export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  author: {
    name: string;
    image: string;
  };
  content: string;
  slug: string;
  tags: string[];
  image: string;
  readingTime: string;
}

export type BlogCategory = {
  name: string;
  description: string;
  slug: string;
};
