export interface Image {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  likes: number;
  comments: Comment[];
  postedBy: string;
  postedAt: Date;
}

export interface Comment {
  id: string;
  author: string;
  text: string;
  postedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  icon?: string;
}
