
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
          
          <FooterLinks 
            title="Ссылки" 
            links={[
              { label: "Главная", href: "#" },
              { label: "Форум", href: "#" },
              { label: "Донат", href: "#" },
              { label: "О проекте", href: "#" }
            ]} 
          />
          
          <FooterLinks 
            title="Ресурсы" 
            links={[
              { label: "Правила проекта", href: "#" },
              { label: "Как начать играть", href: "#" },
              { label: "Вакансии", href: "#" },
              { label: "FAQ", href: "#" }
            ]} 
          />
          
          <div>
            <h3 className="text-lg font-bold mb-4">Социальные сети</h3>
            <div className="flex space-x-4">
              <SocialButton icon="Facebook" />
              <SocialButton icon="Twitter" />
              <SocialButton icon="Instagram" />
              <SocialButton icon="Youtube" />
              <SocialButton icon="MessageCircle" />
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

interface FooterLink {
  label: string;
  href: string;
}

interface FooterLinksProps {
  title: string;
  links: FooterLink[];
}

const FooterLinks = ({ title, links }: FooterLinksProps) => {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <ul className="text-gray-400 text-sm space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="hover:text-[#E50914]">{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface SocialButtonProps {
  icon: string;
}

const SocialButton = ({ icon }: SocialButtonProps) => {
  return (
    <Button variant="ghost" size="icon" className="hover:text-[#E50914] rounded-full">
      <Icon name={icon} className="h-5 w-5" />
    </Button>
  );
};

export default Footer;
