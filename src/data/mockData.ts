
import { ForumCategory, ForumTopic } from "@/types/forum";

export const forumCategories: ForumCategory[] = [
  {
    id: 1,
    name: "Новости проекта",
    description: "Официальные новости и анонсы от администрации",
    topics: 24,
    posts: 253,
    icon: "Newspaper"
  },
  {
    id: 2,
    name: "Игровые сервера",
    description: "Обсуждение игровых серверов, их особенностей и правил",
    topics: 78,
    posts: 1457,
    icon: "Server"
  },
  {
    id: 3,
    name: "Помощь игрокам",
    description: "Техническая поддержка, руководства и ответы на вопросы",
    topics: 156,
    posts: 3247,
    icon: "HelpCircle"
  },
  {
    id: 4,
    name: "Отчеты о багах",
    description: "Сообщения об ошибках и проблемах в игре",
    topics: 89,
    posts: 742,
    icon: "Bug"
  },
  {
    id: 5,
    name: "Предложения",
    description: "Ваши идеи и предложения по улучшению игры",
    topics: 112,
    posts: 948,
    icon: "Lightbulb"
  },
  {
    id: 6,
    name: "Общение",
    description: "Свободное общение на темы, связанные с игрой",
    topics: 215,
    posts: 5327,
    icon: "MessageCircle"
  }
];

export const forumTopics: ForumTopic[] = [
  {
    id: 1,
    title: "Обновление 2.5.0 - Список изменений",
    author: "Admin",
    replies: 42,
    views: 2534,
    lastActivity: "1 час назад",
    category: "Новости проекта",
    isAnnouncement: true
  },
  {
    id: 2,
    title: "Конкурс ко дню основания проекта",
    author: "GameMaster",
    replies: 89,
    views: 3127,
    lastActivity: "2 часа назад",
    category: "Новости проекта",
    isHot: true
  },
  {
    id: 3,
    title: "Проблемы с подключением к серверу Mesa",
    author: "User1337",
    replies: 23,
    views: 872,
    lastActivity: "4 часа назад",
    category: "Помощь игрокам"
  },
  {
    id: 4,
    title: "Руководство для новичков - Как начать играть",
    author: "Support",
    replies: 56,
    views: 12487,
    lastActivity: "1 день назад",
    category: "Помощь игрокам"
  },
  {
    id: 5,
    title: "Набор в клан 'Ночные волки'",
    author: "ClanLeader",
    replies: 28,
    views: 945,
    lastActivity: "5 часов назад",
    category: "Общение",
    isHot: true
  }
];
