import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { FC } from 'react';
import Carousel from 'react-grid-carousel';

const PageLeftButton = (
  <button className="absolute left-0 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gray-900 stroke-white p-1 shadow shadow-black transition hover:scale-125">
    <ChevronLeftIcon className="h-4 w-4" />
  </button>
);

const PageRightButton = (
  <button className="absolute right-0 top-1/2 flex h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gray-900 stroke-white p-1 shadow shadow-black transition hover:scale-125">
    <ChevronRightIcon className="h-4 w-4" />
  </button>
);


type Item = FC;

type HomeSectionCarouselSubtypes = {
  Item: Item;
};

interface HomeSectionCarouselProps {
  rows: number;
  cols: number;
  gap?: number;
}

export const HomeSectionCarousel: FC<HomeSectionCarouselProps> & HomeSectionCarouselSubtypes = ({ rows, cols, gap = 0, children }) => (
  <Carousel
    rows={rows}
    cols={cols}
    gap={gap}
    arrowLeft={PageLeftButton}
    arrowRight={PageRightButton}
  >
    {children}
  </Carousel>
);

HomeSectionCarousel.Item = Carousel.Item;
