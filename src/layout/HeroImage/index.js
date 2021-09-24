import React from 'react';
import Image from 'next/image';
import IMAGES from 'shared/constants/images';

const HeroImage = () => (
  <div className="relative hero-image">
    <Image
      src={IMAGES.heroImage}
      alt="Hero Image"
      layout="fill"
      objectFit="cover"
    />
    <div className="absolute top-1/2 w-full text-center">
      <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
      <button type="button" className="flexible-btn">
        I&apos;m flexible
      </button>
    </div>
  </div>
);
export default HeroImage;
