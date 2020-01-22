type Html = string;

export type Article = {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: Html;
};

export type Country = {
  id: string;
  name: string;
};