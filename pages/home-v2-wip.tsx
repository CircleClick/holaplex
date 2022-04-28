import FeaturedBuyNowListingsSection from '@/common/components/home/FeaturedBuyNowListingsSection';
import FeaturedMarkeplacesSection from '@/common/components/home/FeaturedMarketplacesSection';
import Footer from '@/common/components/home/Footer';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <>
      <div className="flex flex-col container mx-auto pb-48 w-3/4">
        <FeaturedBuyNowListingsSection/>
        <FeaturedMarkeplacesSection />
      </div>
      <Footer />
    </>
  );
};

export default Home;
