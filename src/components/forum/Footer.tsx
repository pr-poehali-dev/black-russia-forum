
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
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
  );
};

export default Footer;
