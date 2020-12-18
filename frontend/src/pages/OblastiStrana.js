import React from 'react';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import info from '../data/oblasti';
const OblastiStrana = () => {
  const items = info.map((item, index) => (
    <Col key={index} sm={12} md={6} lg={4}>
      <LinkContainer to={`/oblasti/${item.alt}`}>
        <div className="oblastiCard">
          <img className="oblastiImg" src={item.src} alt={item.alt} />
          <div className="oblastiText">
            <p>
              <strong style={{ color: 'black' }}>{item.h3}</strong>{' '}
            </p>{' '}
            <i
              style={{ color: 'red' }}
              className="fa fa-angle-right"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      </LinkContainer>
    </Col>
  ));

  return (
    <>
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0px 10px 9px 0px rgba(0, 0, 0, 0.75)',
          height: '80vh',
        }}
      >
        <img
          style={{
            width: '100%',
            height: 'auto',

            boxShadow: '0px 10px 9px 0px rgba(0, 0, 0, 0.75)',
          }}
          src="imgs/slider1.jpg"
          alt=""
        />
      </div>

      <Container>
        <h1 className="naslovi">
          <span style={{ color: 'red' }}>Oblasti</span> u kojima smo
          specijalizovani
        </h1>
        <Row>{items}</Row>
      </Container>
    </>
  );
};

export default OblastiStrana;
