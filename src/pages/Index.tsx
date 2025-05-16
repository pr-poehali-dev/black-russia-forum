
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

// Типы данных
interface ForumCategory {
  id: number;
  name: string;
  description: string;
  topics: number;
  posts: number;
  icon: string;
}

interface ForumTopic {
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

const Index = () => {
  // Категории форума
  const [categories] = useState<ForumCategory[]>([
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
  ]);

  // Последние темы форума
  const [topics] = useState<ForumTopic[]>([
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
  ]);

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans">
      {/* Шапка */}
      <header className="bg-[#1E1E1E] border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="text-[#E50914] text-2xl font-bold mr-2">BLACK</div>
              <div className="text-white text-2xl font-bold">RUSSIA</div>
            </div>
            <nav className="flex space-x-4">
              <Button variant="ghost" className="hover:bg-[#E50914]/10 hover:text-[#E50914]">
                Главная
              </Button>
              <Button variant="ghost" className="hover:bg-[#E50914]/10 hover:text-[#E50914]">
                Форум
              </Button>
              <Button variant="ghost" className="hover:bg-[#E50914]/10 hover:text-[#E50914]">
                Донат
              </Button>
              <Button variant="ghost" className="hover:bg-[#E50914]/10 hover:text-[#E50914]">
                О проекте
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Баннер */}
      <div className="relative bg-gradient-to-r from-[#000000] to-[#1E1E1E] py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Форум Black Russia</h1>
          <p className="text-xl text-gray-300 mb-8">Общайтесь с другими игроками, делитесь опытом и находите новых друзей</p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Button className="bg-[#E50914] hover:bg-[#E50914]/90">
              <Icon name="UserPlus" className="mr-2" />
              Регистрация
            </Button>
            <Button variant="outline" className="border-[#E50914] text-[#E50914] hover:bg-[#E50914]/10">
              <Icon name="LogIn" className="mr-2" />
              Войти
            </Button>
          </div>
        </div>
      </div>

      {/* Основной контент */}
      <main className="container mx-auto px-4 py-8">
        {/* Статистика */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-[#1E1E1E] border-gray-800">
            <CardContent className="pt-6">
              <div className="flex items-center">
                <Icon name="Users" className="text-[#E50914] mr-3 h-5 w-5" />
                <div>
                  <p className="text-sm text-gray-400">Пользователей</p>
                  <p className="text-2xl font-bold">24,567</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-[#1E1E1E] border-gray-800">
            <CardContent className="pt-6">
              <div className="flex items-center">
                <Icon name="MessageSquare" className="text-[#E50914] mr-3 h-5 w-5" />
                <div>
                  <p className="text-sm text-gray-400">Сообщений</p>
                  <p className="text-2xl font-bold">137,842</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-[#1E1E1E] border-gray-800">
            <CardContent className="pt-6">
              <div className="flex items-center">
                <Icon name="Activity" className="text-[#E50914] mr-3 h-5 w-5" />
                <div>
                  <p className="text-sm text-gray-400">Онлайн сейчас</p>
                  <p className="text-2xl font-bold">487</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Категории форума */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Категории форума</h2>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                <Icon name="Plus" className="mr-2 h-4 w-4" />
                Создать тему
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {categories.map((category) => (
              <Card key={category.id} className="bg-[#1E1E1E] border-gray-800 hover:border-[#E50914]/40 transition-colors">
                <CardHeader className="py-4">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <div className="bg-[#E50914]/10 p-3 rounded-md mr-4">
                        <Icon name={category.icon} className="text-[#E50914] h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{category.name}</CardTitle>
                        <CardDescription className="text-gray-400">{category.description}</CardDescription>
                      </div>
                    </div>
                    <div className="hidden md:flex flex-col items-end text-gray-400 text-sm">
                      <div>Тем: {category.topics}</div>
                      <div>Сообщений: {category.posts}</div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Последние темы */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Последние обсуждения</h2>
          <Card className="bg-[#1E1E1E] border-gray-800">
            {topics.map((topic, index) => (
              <div key={topic.id}>
                <div className="p-4">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        {topic.isAnnouncement && (
                          <Badge className="mr-2 bg-[#E50914]">Объявление</Badge>
                        )}
                        {topic.isHot && (
                          <Badge className="mr-2 bg-orange-600">Популярная</Badge>
                        )}
                        <Badge variant="outline" className="text-gray-400 border-gray-700">{topic.category}</Badge>
                      </div>
                      <h3 className="text-lg font-medium mb-1 hover:text-[#E50914] cursor-pointer transition-colors">{topic.title}</h3>
                      <p className="text-sm text-gray-400">
                        Автор: <span className="text-gray-300">{topic.author}</span> • Последняя активность: {topic.lastActivity}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0 flex md:flex-col items-center md:items-end text-sm text-gray-400">
                      <div className="mr-4 md:mr-0">Ответов: {topic.replies}</div>
                      <div>Просмотров: {topic.views}</div>
                    </div>
                  </div>
                </div>
                {index < topics.length - 1 && <Separator className="bg-gray-800" />}
              </div>
            ))}
            <CardFooter className="justify-end py-3 bg-[#1E1E1E]/50">
              <Button variant="ghost" className="text-gray-400 hover:text-[#E50914]">
                Показать больше
                <Icon name="ChevronRight" className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* О проекте */}
        <div className="mb-8">
          <Card className="bg-[#1E1E1E] border-gray-800">
            <CardHeader>
              <CardTitle>О проекте Black Russia</CardTitle>
              <CardDescription>Многопользовательская ролевая игра в открытом мире</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Black Russia — это захватывающий проект, основанный на модификации GTA,
                где игроки могут погрузиться в реалистичный мир с ролевыми элементами.
                Наш проект предлагает уникальный игровой опыт с множеством возможностей для развития персонажа.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#252525] p-4 rounded-lg">
                  <h3 className="font-medium mb-2 flex items-center">
                    <Icon name="Server" className="text-[#E50914] mr-2 h-5 w-5" />
                    10+ серверов
                  </h3>
                  <p className="text-sm text-gray-400">
                    Множество уникальных серверов с различными особенностями и игровым опытом
                  </p>
                </div>
                <div className="bg-[#252525] p-4 rounded-lg">
                  <h3 className="font-medium mb-2 flex items-center">
                    <Icon name="User" className="text-[#E50914] mr-2 h-5 w-5" />
                    Развитие персонажа
                  </h3>
                  <p className="text-sm text-gray-400">
                    Прокачивайте навыки, зарабатывайте на жизнь и строите карьеру в виртуальном мире
                  </p>
                </div>
                <div className="bg-[#252525] p-4 rounded-lg">
                  <h3 className="font-medium mb-2 flex items-center">
                    <Icon name="Users" className="text-[#E50914] mr-2 h-5 w-5" />
                    Активное сообщество
                  </h3>
                  <p className="text-sm text-gray-400">
                    Присоединяйтесь к тысячам игроков и участвуйте в жизни виртуального города
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-center">
              <Button className="bg-[#E50914] hover:bg-[#E50914]/90">
                Начать играть
                <Icon name="ExternalLink" className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>

      {/* Футер */}
      <footer className="bg-[#1E1E1E] border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Black Russia</h3>
              <p className="text-gray-400 text-sm">
                Лучший игровой проект, основанный на GTA с ролевыми элементами.
                Погрузитесь в увлекательный мир, полный возможностей и приключений.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Ссылки</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><a href="#" className="hover:text-[#E50914]">Главная</a></li>
                <li><a href="#" className="hover:text-[#E50914]">Форум</a></li>
                <li><a href="#" className="hover:text-[#E50914]">Донат</a></li>
                <li><a href="#" className="hover:text-[#E50914]">О проекте</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Ресурсы</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><a href="#" className="hover:text-[#E50914]">Правила проекта</a></li>
                <li><a href="#" className="hover:text-[#E50914]">Как начать играть</a></li>
                <li><a href="#" className="hover:text-[#E50914]">Вакансии</a></li>
                <li><a href="#" className="hover:text-[#E50914]">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Социальные сети</h3>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="hover:text-[#E50914] rounded-full">
                  <Icon name="Facebook" className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-[#E50914] rounded-full">
                  <Icon name="Twitter" className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-[#E50914] rounded-full">
                  <Icon name="Instagram" className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-[#E50914] rounded-full">
                  <Icon name="Youtube" className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-[#E50914] rounded-full">
                  <Icon name="MessageCircle" className="h-5 w-5" />
                </Button>
              </div>
              <div className="mt-4">
                <Button variant="outline" className="w-full border-[#E50914] text-[#E50914] hover:bg-[#E50914]/10">
                  <Icon name="Discord" className="mr-2 h-5 w-5" />
                  Присоединиться к Discord
                </Button>
              </div>
            </div>
          </div>
          <Separator className="my-6 bg-gray-800" />
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>© 2025 Black Russia. Все права защищены.</p>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <a href="#" className="hover:text-[#E50914]">Политика конфиденциальности</a>
              <a href="#" className="hover:text-[#E50914]">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
