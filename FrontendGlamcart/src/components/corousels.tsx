import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Carousels = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className='carsouel__item'>
        <img
          loading='lazy'
          className='d-block w-full '
          src='https://as2.ftcdn.net/v2/jpg/02/81/76/79/1000_F_281767961_OzR7zjNhsdKw7DUZMFtwgXAZl2UrprX3.jpg'
          alt='First slide'
        />
      </Carousel.Item>
      <Carousel.Item className='carsouel__item'>
        <img
          loading='lazy'
          className='d-block w-full '
          src='https://cdn.vectorstock.com/i/preview-2x/99/16/lipstick-cosmetics-make-up-beauty-product-banner-vector-29159916.webp'
          alt='Second slide'
        />
      </Carousel.Item>
      <Carousel.Item className='carsouel__item'>
        <img
          loading='lazy'
          className='d-block w-full'
          src='https://cdn.vectorstock.com/i/preview-2x/29/05/lipstick-cosmetics-makeup-product-with-3d-objects-vector-43512905.webp'
          alt='Third slide'
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousels;
