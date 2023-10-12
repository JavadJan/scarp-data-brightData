"use client"
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Slider = () => {
  const images = [
    { url: '/assets/images/hero1.png', alt: 'hero1' },
    { url: '/assets/images/hero2.png', alt: 'hero2' },
    { url: '/assets/images/hero3.png', alt: 'hero3' },
    { url: '/assets/images/hero4.png', alt: 'hero4' },
    { url: '/assets/images/hero5.png', alt: 'hero5' },
  ]
  return (
    <Carousel showThumbs={false} interval={2000} infiniteLoop showArrows={false} autoPlay showStatus className='bg-hero'>

      {images.map((image) => (
        <div className='flex py-10 max-h-[600px]' key={image.alt}>
          <Image src={image.url} alt={image.alt} width={480} height={480} className='object-contain' />
        </div>
      ))}
    </Carousel>
  )
}

export default Slider