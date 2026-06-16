import { Features } from '../components/Features';
import { Hero } from '../components/Hero';
import { SaleBanners } from '../components/SaleBanners';

export function HomePage() {
  return (
    <div>
      <Hero />

      <Features />

      <SaleBanners />
    </div>
  );
}
