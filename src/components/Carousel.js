import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="jumboImage"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>SPPL DEMO</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="jumboImage"
          src={image2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>SPPL DEMO</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;