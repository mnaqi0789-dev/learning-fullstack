interface Post {
  id: number;
  title: string;
  slug: string;
  description: string;
  content: unknown;
  category: 'finance' | 'compsci';
  bannerImage: string;
  createdAt: Date;
};