import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { Categories } from "@/components/home/Categories";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { StorySection } from "@/components/home/StorySection";
import { ImpactSection } from "@/components/home/ImpactSection";
import { Testimonials } from "@/components/home/Testimonials";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Categories />
      <FeaturedProducts
        title="New Arrivals"
        subtitle="Fresh additions to our handcrafted collection"
        filter="new"
        limit={4}
      />
      <StorySection />
      <FeaturedProducts
        title="Best Sellers"
        subtitle="Community favorites loved by all"
        filter="bestseller"
        limit={4}
      />
      <ImpactSection />
      <Testimonials />
    </Layout>
  );
};

export default Index;
