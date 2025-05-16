
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
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
  );
};

export default Header;
