import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { Categories } from "@/components/home/Categories";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { StorySection } from "@/components/home/StorySection";
import { ImpactSection } from "@/components/home/ImpactSection";
import { Testimonials } from "@/components/home/Testimonials";
const Index = () => {
  return <Layout>
      <Hero />
      <Categories className="border-sidebar-ring bg-[#364d37]" />
      <FeaturedProducts title="Our Collection" subtitle="Handcrafted treasures from Arunachal Pradesh" limit={8} />
      <StorySection />
      <ImpactSection />
      <Testimonials />
    </Layout>;
};
export default Index;