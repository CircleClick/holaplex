import { VFC } from 'react';
import HomeSection from './HomeSection';
import MarketplacePreview from './MarketplacePreview';
import { HomeSectionCarousel } from './HomeSectionCarousel';

const previewSubdomains: string[] = [
  'junglecats',
  'cityshop',
  'thechimpions',
  'skeletoncrew',
  'monkedao',
  'ursmarket',
  'pixelbands',
  'thislooksrare',
  'shiguardians',
  'mortuary',
  'kurumanft',
  'paragon',
];

const FeaturedMarkeplacesSection: VFC = () => {
  return (
    <HomeSection>
      <HomeSection.Header>
        <HomeSection.Title>Marketplaces</HomeSection.Title>
        <HomeSection.HeaderAction external href="https://marketplace.holaplex.com/waitlist">
          Join waitlist
        </HomeSection.HeaderAction>
      </HomeSection.Header>
      <HomeSection.Body>
        <HomeSectionCarousel cols={3} rows={2}>
          {previewSubdomains.map((s) => (
            <HomeSectionCarousel.Item key={s}>
              <div key={s} className="aspect-[16/10] w-full p-2">
                <MarketplacePreview subdomain={s} />
              </div>
            </HomeSectionCarousel.Item>
          ))}
        </HomeSectionCarousel>
      </HomeSection.Body>
    </HomeSection>
  );
};

export default FeaturedMarkeplacesSection;
