import { DailyBestSell } from '../sections/DailyBestSell';
import { EcoFriendly } from '../sections/EcoFriendly';
import { Features } from '../sections/Features';
import { Hero } from '../sections/Hero';
import { SaleBanners } from '../sections/SaleBanners';
import { TopCategory } from '../sections/TopCategory';

export function HomePage() {
  return (
    <div>
      <Hero />

      <Features />

      <SaleBanners />

      <TopCategory />

      <EcoFriendly />

      <DailyBestSell />
    </div>
  );
}
