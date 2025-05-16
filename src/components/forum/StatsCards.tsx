
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { ForumStats } from "@/types/forum";

interface StatsCardsProps {
  stats: ForumStats;
}

const StatsCards = ({ stats }: StatsCardsProps) => {
  const { users, messages, online } = stats;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <Card className="bg-[#1E1E1E] border-gray-800">
        <CardContent className="pt-6">
          <div className="flex items-center">
            <Icon name="Users" className="text-[#E50914] mr-3 h-5 w-5" />
            <div>
              <p className="text-sm text-gray-400">Пользователей</p>
              <p className="text-2xl font-bold">{users.toLocaleString()}</p>
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
              <p className="text-2xl font-bold">{messages.toLocaleString()}</p>
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
              <p className="text-2xl font-bold">{online.toLocaleString()}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsCards;
