import { Features } from '../components/Features';
import { Hero } from '../components/Hero';
import { SaleBanners } from '../components/SaleBanners';
import { TopCategory } from '../components/TopCategory';

export function HomePage() {
  return (
    <div>
      <Hero />

      <Features />

      <SaleBanners />

      <TopCategory />
    </div>
  );
}
