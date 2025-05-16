import { useState } from "react";
import Header from "@/components/forum/Header";
import Banner from "@/components/forum/Banner";
import StatsCards from "@/components/forum/StatsCards";
import CategoryList from "@/components/forum/CategoryList";
import TopicList from "@/components/forum/TopicList";
import AboutProject from "@/components/forum/AboutProject";
import Footer from "@/components/forum/Footer";
import { forumCategories, forumTopics } from "@/data/mockData";

const Index = () => {
  // Используем данные из внешнего файла
  const [categories] = useState(forumCategories);
  const [topics] = useState(forumTopics);

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans">
      {/* Шапка */}
      <Header />

      {/* Баннер */}
      <Banner />

      {/* Основной контент */}
      <main className="container mx-auto px-4 py-8">
        {/* Статистика */}
        <StatsCards />

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
