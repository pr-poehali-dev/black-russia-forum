
export interface ForumCategory {
  id: number;
  name: string;
  description: string;
  topics: number;
  posts: number;
  icon: string;
}

export interface ForumTopic {
  id: number;
  title: string;
  author: string;
  replies: number;
  views: number;
  lastActivity: string;
  category: string;
  isHot?: boolean;
  isAnnouncement?: boolean;
}
