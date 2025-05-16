
import { ForumCategory } from "@/types/forum";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface CategoryListProps {
  categories: ForumCategory[];
}

const CategoryList = ({ categories }: CategoryListProps) => {
  return (
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
  );
};

export default CategoryList;
