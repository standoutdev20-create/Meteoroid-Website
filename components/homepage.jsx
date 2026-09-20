import { Shell } from "./site-shell";
import Hero from "./Hero";
import About from "./homepage/About";
import Collections from "./homepage/Collections";
import CNCSection from "./homepage/CNCSection";
import ProductCategories from "./homepage/ProductCategories";
import FeaturedDesigns from "./homepage/FeaturedDesigns";
import ProjectPreview from "./homepage/ProjectPreview";
import VideoBlock from "./homepage/VideoBlock";
import CatalogueSection from "./homepage/CatalogueSection";
import EnquirySection from "./homepage/EnquirySection";

export default function Homepage() {
  return (
    <Shell>
      <main>
        <Hero />
        <About />
        <Collections />
        <CNCSection />
        <ProductCategories />
        <FeaturedDesigns />
        <ProjectPreview />
        <VideoBlock />
        <CatalogueSection />
        <EnquirySection />
      </main>
    </Shell>
  );
}
