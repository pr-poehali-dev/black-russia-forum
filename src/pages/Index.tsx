import { forumCategories, forumTopics } from "@/data/mockData";
import Header from "@/components/forum/Header";
import Banner from "@/components/forum/Banner";
import StatsCards from "@/components/forum/StatsCards";
import CategoryList from "@/components/forum/CategoryList";
import TopicList from "@/components/forum/TopicList";
import AboutProject from "@/components/forum/AboutProject";
import Footer from "@/components/forum/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans">
      <Header />
      <Banner />

      {/* Основной контент */}
      <main className="container mx-auto px-4 py-8">
        <StatsCards />
        <CategoryList categories={forumCategories} />
        <TopicList topics={forumTopics} />
        <AboutProject />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
