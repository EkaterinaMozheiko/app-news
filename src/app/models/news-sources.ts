export interface NewsSources {
  status: string;
  sources: Sources[];
}

export interface Sources {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}
