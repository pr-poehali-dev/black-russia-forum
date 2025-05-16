
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#000000] to-[#1E1E1E] py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Форум Black Russia</h1>
        <p className="text-xl text-gray-300 mb-8">
          Общайтесь с другими игроками, делитесь опытом и находите новых друзей
        </p>
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
  );
};

export default Banner;
