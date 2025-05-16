import Header from "@/components/forum/Header";
import Banner from "@/components/forum/Banner";
import StatsCards from "@/components/forum/StatsCards";
import CategoryList from "@/components/forum/CategoryList";
import TopicList from "@/components/forum/TopicList";
import AboutProject from "@/components/forum/AboutProject";
import Footer from "@/components/forum/Footer";
import { categories, topics, stats } from "@/data/mockData";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans">
      {/* Шапка */}
      <Header />

      {/* Баннер */}
      <Banner />

      {/* Основной контент */}
      <main className="container mx-auto px-4 py-8">
        {/* Статистика */}
        <StatsCards stats={stats} />

        {/* Категории форума */}
        <CategoryList categories={categories} />

        {/* Последние темы */}
        <TopicList topics={topics} />

        {/* О проекте */}
        <AboutProject />
      </main>

      {/* Футер */}
      <Footer />
    </div>
  );
};

export default Index;
