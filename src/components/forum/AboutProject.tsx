
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
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
  );
};

export default AboutProject;
