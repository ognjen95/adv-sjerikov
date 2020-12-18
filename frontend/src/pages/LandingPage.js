import React, { useState } from 'react';
import { Col, Row, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import CarouselLanding from '../components/Carousel';

import KontaktForma from '../components/KontaktForma';

const LandingPage = () => {
  return (
    <>
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0px 10px 9px 0px rgba(0, 0, 0, 0.75)',
        }}
      >
        <img
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '100vh',
            boxShadow: '0px 10px 9px 0px rgba(0, 0, 0, 0.75)',
          }}
          src="imgs/upravno.jpg"
          alt=""
        />
      </div>

      <div className="oNama">
        <Container>
          <Row style={{ display: 'flex', alignItems: 'center' }}>
            <Col xs={12} md={4}>
              <p style={{ marginBottom: '5px' }}>
                <span style={{ color: 'red', marginBottom: '0' }}>
                  ZASTO DA PRUZITE POVJERENJE NAMA?
                </span>
              </p>
              <h1>
                Dugogodisnja Porodicna <br /> Praksa i iskustvo
              </h1>
            </Col>
            <Col xs={12} md={4}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Magnam, iusto architecto. Laboriosam animi recusandae unde
                quaerat saepe quod tenetur hic.
              </p>
            </Col>
            <Col xs={12} md={4}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Magnam, iusto architecto. Laboriosam animi recusandae unde
                quaerat saepe quod tenetur hic.
              </p>
              <LinkContainer to="/oNama">
                <div>
                  <a
                    style={{
                      color: 'red',
                      cursor: 'pointer',
                    }}
                  >
                    Saznaj vise o nama{' '}
                  </a>
                  <i
                    style={{
                      color: 'red',
                      fontSize: '2rem',
                      marginLeft: '10px',
                      cursor: 'pointer',
                    }}
                    className="fa fa-angle-right"
                    aria-hidden="true"
                  ></i>
                </div>
              </LinkContainer>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        <Container fluid>
          <Row
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'black',
              color: 'white',
            }}
          >
            <Col className="colNoPadding" md={12} lg={6}>
              <img
                style={{
                  width: '100%',
                  minHeight: '580px',
                  maxHeight: '479px',
                }}
                src="/imgs/slider2.jpg"
                alt=""
              />
            </Col>
            <Col
              style={{ padding: '50px 0' }}
              className="colNoPadding"
              md={12}
              lg={6}
            >
              <Container>
                {/* <p style={{ marginTop: '30px', marginBottom: '5px' }}>
                <span style={{ color: 'red', marginBottom: '0' }}>
                  ZASTO DA PRUZITE POVJERENJE NAMA?
                </span>
              </p> */}
                <h1 style={{ textAlign: 'center', color: 'red' }}>
                  Dugogodisnja Porodicna <br /> Praksa i iskustvo
                </h1>
                <br />
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Magnam, iusto architecto. Laboriosam animi recusandae unde
                  quaerat saepe quod tenetur hic.
                </p>

                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Doloribus nihil quam esse qui soluta minima reiciendis
                  accusantium quis id maxime!
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Doloribus nihil quam esse qui soluta minima reiciendis
                  accusantium quis id maxime!
                </p>
                <div style={{ textAlign: 'center', paddingTop: '10px' }}>
                  <Button size="lg" variant="outline-light">
                    Više o nama
                  </Button>
                </div>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Oblasti */}
      <div>
        <Container>
          <h1 className="naslovi">
            <span style={{ color: 'red' }}>Oblasti</span> u kojima smo
            specijalizovani
          </h1>
        </Container>
        <div className="carouselDiv">
          <CarouselLanding />
        </div>
      </div>

      <div>
        <KontaktForma />
      </div>
    </>
  );
};

export default LandingPage;
