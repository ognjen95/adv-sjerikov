import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import info from '../data/oblasti';
const CarouselLanding = () => {
  const items = info.map((item, index) => (
    <Carousel.Item style={{ position: 'relative' }} interval={5000} key={index}>
      <img
        className="d-block w-100 carouselImg"
        src={item.src}
        alt={item.alt}
      />
      <Carousel.Caption className="carouselCaption">
        <h1 style={{ fontFamily: 'inherit' }}>{item.h3}</h1>
        {/* <p style={{fontFamily:'inherit', }}>Oblasti u kojima smo specijalizovani</p> */}
        <LinkContainer
          style={{ margin: '10px 10px 10px 0 ' }}
          to={`/oblasti/${item.alt}`}
        >
          <Button size="lg" variant="outline-light">
            Više informacija
          </Button>
        </LinkContainer>
        <LinkContainer style={{ margin: '10px 10px 10px 0 ' }} to="/oblasti">
          <Button
            size="lg"
            variant="light"
            style={{ margin: '10px 10px 10px 0 ' }}
          >
            Pogledaj sve oblasti
          </Button>
        </LinkContainer>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  return (
    <Carousel indicators={false} pause={false}>
      {items}
    </Carousel>
  );
};

export default CarouselLanding;
