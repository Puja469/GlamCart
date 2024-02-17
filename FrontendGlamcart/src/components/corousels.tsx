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
          src='https://www.shutterstock.com/image-photo/makeup-professional-cosmetics-on-pink-600nw-1398700589.jpg'
          alt='First slide'
        />
      </Carousel.Item>
      <Carousel.Item className='carsouel__item'>
        <img
          loading='lazy'
          className='d-block w-full '
          src='https://cdn1.vectorstock.com/i/1000x1000/02/20/cosmetics-beauty-products-for-make-up-sale-banner-vector-25170220.jpg'
          alt='Second slide'
        />
      </Carousel.Item>
      <Carousel.Item className='carsouel__item'>
        <img
          loading='lazy'
          className='d-block w-full '
          src='https://i.pinimg.com/736x/fc/97/32/fc9732d8c3a636bad34c235702800188.jpg'
          alt='Third slide'
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousels;
