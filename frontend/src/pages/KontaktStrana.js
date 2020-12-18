import React from 'react';
import { Col, Row, Container, Form, Button } from 'react-bootstrap';

import WrapperMap from '../components/GoogleMaps';
import KontaktForma from '../components/KontaktForma';

const KontaktStrana = () => {
  return (
    <div>
      <div className="contact1Div">
        <img
          className="jumbo"
          style={{
            width: '100%',
            height: '80vh',
            boxShadow: '0px 10px 9px 0px rgba(0, 0, 0, 0.75)',
          }}
          src="imgs/telefon.jpg"
          alt=""
        />

        <div className="contactDiv">
          <Container>
            <Row
              style={{
                backgroundColor: '#474747',
                boxShadow: '0px 6px 20px -1px rgba(0,0,0,0.75)',
                color: 'white',
              }}
            >
              <Col
                style={{ padding: '70px 0', textAlign: 'center' }}
                xs={12}
                md={4}
              >
                {' '}
                Adresa: <br /> Brace Jugovic 32 <br />
                {/* <Button variant="link" onClick={() => setModalShow(true)}>Otvori Google Mape </Button>     */}
                <a
                  style={{ color: 'red', fontSize: '1rem' }}
                  href="#googleMaps"
                >
                  {' '}
                  Pogledaj lokaciju na Google mapama
                </a>
              </Col>
              <Col
                style={{
                  padding: '70px 0',
                  backgroundColor: '#202020',
                  color: '#fafafa',
                  textAlign: 'center',
                }}
                xs={12}
                md={4}
              >
                {' '}
                Broj telefona: <br /> 063 23 23 32
              </Col>
              <Col
                style={{ padding: '70px 0', textAlign: 'center' }}
                xs={12}
                md={4}
              >
                {' '}
                Email adresa: <br />
                <a
                  style={{ color: 'inherit' }}
                  href="mailto:atlagicognjen@gmail.com"
                >
                  atlagicognjen@gmail.com{' '}
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div id="divspace" style={{ margin: '80px 0', height: '1px' }}></div>
      <div>
        <KontaktForma />
      </div>
      <div className="googleMaps">
        <WrapperMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  );
};

export default KontaktStrana;
