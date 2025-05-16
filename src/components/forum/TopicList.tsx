
import { Card, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { ForumTopic } from "@/types/forum";

interface TopicListProps {
  topics: ForumTopic[];
}

const TopicList = ({ topics }: TopicListProps) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Последние обсуждения</h2>
      <Card className="bg-[#1E1E1E] border-gray-800">
        {topics.map((topic, index) => (
          <TopicItem 
            key={topic.id} 
            topic={topic} 
            showSeparator={index < topics.length - 1}
          />
        ))}
        <CardFooter className="justify-end py-3 bg-[#1E1E1E]/50">
          <Button variant="ghost" className="text-gray-400 hover:text-[#E50914]">
            Показать больше
            <Icon name="ChevronRight" className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

interface TopicItemProps {
  topic: ForumTopic;
  showSeparator: boolean;
}

const TopicItem = ({ topic, showSeparator }: TopicItemProps) => {
  return (
    <div>
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
      {showSeparator && <Separator className="bg-gray-800" />}
    </div>
  );
};

export default TopicList;
