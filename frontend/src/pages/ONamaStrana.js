import React from 'react';
import { Col, Row, Container, Jumbotron } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ONamaStrana = () => {
  return (
    <>
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0px 10px 9px 0px rgba(0, 0, 0, 0.75)',
          maxHeight: '80vh',
        }}
      >
        <img
          style={{
            width: '100%',
            height: 'auto',

            boxShadow: '0px 10px 9px 0px rgba(0, 0, 0, 0.75)',
          }}
          src="/imgs/slider1.jpg"
          alt=""
        />
      </div>

      <div className="oNama">
        <Container>
          <Row>
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
        <Container>
          <Row
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Col md={12} lg={6}>
              <div
                style={{
                  position: 'relative',
                }}
              >
                <img style={{ width: '100%' }} src="/imgs/slider2.jpg" alt="" />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    position: 'absolute',
                    left: '0',
                    bottom: '0',
                    color: 'white',
                    backgroundColor: 'red',
                    padding: '0 20px',
                  }}
                >
                  <p>
                    <span style={{ fontSize: '4rem' }}>95%</span> <br />{' '}
                    <span style={{ fontSize: '1rem' }}>
                      dobijenih slucajeva
                    </span>{' '}
                  </p>
                </div>
              </div>
            </Col>
            <Col md={12} lg={6}>
              <p style={{ marginTop: '30px', marginBottom: '5px' }}>
                <span style={{ color: 'red', marginBottom: '0' }}>
                  ZASTO DA PRUZITE POVJERENJE NAMA?
                </span>
              </p>
              <h1>
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
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ONamaStrana;
