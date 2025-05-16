
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const AboutProject = () => {
  return (
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
            <FeatureCard 
              icon="Server" 
              title="10+ серверов" 
              description="Множество уникальных серверов с различными особенностями и игровым опытом" 
            />
            <FeatureCard 
              icon="User" 
              title="Развитие персонажа" 
              description="Прокачивайте навыки, зарабатывайте на жизнь и строите карьеру в виртуальном мире" 
            />
            <FeatureCard 
              icon="Users" 
              title="Активное сообщество" 
              description="Присоединяйтесь к тысячам игроков и участвуйте в жизни виртуального города" 
            />
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
  );
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-[#252525] p-4 rounded-lg">
      <h3 className="font-medium mb-2 flex items-center">
        <Icon name={icon} className="text-[#E50914] mr-2 h-5 w-5" />
        {title}
      </h3>
      <p className="text-sm text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default AboutProject;
