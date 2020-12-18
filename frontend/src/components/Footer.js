import React from 'react';
import { Col, Row, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: 'black',
        color: 'white',
        padding: '25px 0 0 0',
      }}
    >
      <Container>
        <Row>
          <Col
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '5px',
            }}
            md={4}
          >
            <i
              style={{ color: 'red', paddingRight: '10px', fontSize: '1.5rem' }}
              className="fa fa-envelope-o"
              aria-hidden="true"
            ></i>
            sjerikov@gmail.com
          </Col>
          <Col
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '5px',
            }}
            md={4}
          >
            {' '}
            <i
              style={{ color: 'red', paddingRight: '10px', fontSize: '1.5rem' }}
              className="fa fa-clock-o"
              aria-hidden="true"
            ></i>
            pon - pet : 9:00 – 17:00{' '}
          </Col>
          <Col
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '5px',
            }}
            md={4}
          >
            <i
              style={{ color: 'red', paddingRight: '10px', fontSize: '1.5rem' }}
              className="fa fa-map-marker"
              aria-hidden="true"
            ></i>
            Brace Jugovica 4, Banja Luka
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: '50px' }}>
        <Row>
          {/* <Col
            style={{ textAlign: 'left', marginBottom: '50px' }}
            xs={5}
            lg={12}
          >
            <img
              style={{ height: '100px', width: '100px' }}
              src="/imgs/logo.png"
              alt=""
            />
          </Col> */}
          <Col style={{ textAlign: 'left' }} xs={5} lg={2}>
            <ul className="footerUl" style={{ listStyleType: 'none' }}>
              <LinkContainer to="/">
                <a>
                  <li>
                    <i
                      style={{
                        color: 'red',
                        paddingRight: '10px',
                        fontSize: '1.5rem',
                      }}
                      className="fa fa-angle-right"
                      aria-hidden="true"
                    ></i>{' '}
                    Početna{' '}
                  </li>
                </a>
              </LinkContainer>
              <LinkContainer to="/o-nama ">
                <a>
                  <li>
                    <i
                      style={{
                        color: 'red',
                        paddingRight: '10px',
                        fontSize: '1.5rem',
                      }}
                      className="fa fa-angle-right"
                      aria-hidden="true"
                    ></i>{' '}
                    O nama{' '}
                  </li>
                </a>
              </LinkContainer>

              <LinkContainer to="/oblasti">
                <a>
                  {' '}
                  <li>
                    {' '}
                    <i
                      style={{
                        color: 'red',
                        paddingRight: '10px',
                        fontSize: '1.5rem',
                      }}
                      className="fa fa-angle-right"
                      aria-hidden="true"
                    ></i>{' '}
                    Oblasti{' '}
                  </li>
                </a>
              </LinkContainer>

              <LinkContainer to="/kontakt ">
                <a>
                  {' '}
                  <li>
                    {' '}
                    <i
                      style={{
                        color: 'red',
                        paddingRight: '10px',
                        fontSize: '1.5rem',
                      }}
                      className="fa fa-angle-right"
                      aria-hidden="true"
                    ></i>{' '}
                    Kontakt{' '}
                  </li>
                </a>
              </LinkContainer>
            </ul>
          </Col>

          {/* Oblasti podkategorije */}

          <Col
            id="podkategorijeFooter"
            style={{ textAlign: 'left' }}
            xs={2}
            lg={10}
          >
            {' '}
            <ul className="footerUl" style={{ listStyleType: 'none' }}>
              <Row>
                <Col md={4}>
                  <ul style={{ listStyleType: 'none' }}>
                    <LinkContainer to="/o-nama ">
                      <a>
                        {' '}
                        <li>
                          {' '}
                          <i
                            style={{
                              color: 'red',
                              paddingRight: '10px',
                              fontSize: '1.5rem',
                            }}
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>{' '}
                          Privredno pravo{' '}
                        </li>
                      </a>
                    </LinkContainer>
                    <LinkContainer to="/tim ">
                      <a>
                        {' '}
                        <li>
                          {' '}
                          <i
                            style={{
                              color: 'red',
                              paddingRight: '10px',
                              fontSize: '1.5rem',
                            }}
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>{' '}
                          Pravo intelektualne svojine{' '}
                        </li>
                      </a>
                    </LinkContainer>
                    <LinkContainer to="/oblasti">
                      <a>
                        {' '}
                        <li>
                          {' '}
                          <i
                            style={{
                              color: 'red',
                              paddingRight: '10px',
                              fontSize: '1.5rem',
                            }}
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>{' '}
                          Stvarno pravo{' '}
                        </li>
                      </a>
                    </LinkContainer>
                    <LinkContainer to="/tim ">
                      <a>
                        {' '}
                        <li>
                          {' '}
                          <i
                            style={{
                              color: 'red',
                              paddingRight: '10px',
                              fontSize: '1.5rem',
                            }}
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>{' '}
                          Parnično pravo{' '}
                        </li>
                      </a>
                    </LinkContainer>
                    <LinkContainer to="/oblasti">
                      <a>
                        {' '}
                        <li>
                          {' '}
                          <i
                            style={{
                              color: 'red',
                              paddingRight: '10px',
                              fontSize: '1.5rem',
                            }}
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>{' '}
                          Zaštita prava pred Ustavnim i Evropskim sudom za
                          ljudska prava{' '}
                        </li>
                      </a>
                    </LinkContainer>
                  </ul>
                </Col>
                <Col md={4}>
                  <ul style={{ listStyleType: 'none' }}>
                    <LinkContainer to="/o-nama ">
                      <a>
                        {' '}
                        <li>
                          {' '}
                          <i
                            style={{
                              color: 'red',
                              paddingRight: '10px',
                              fontSize: '1.5rem',
                            }}
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>{' '}
                          Nekretnine
                        </li>
                      </a>
                    </LinkContainer>
                    <LinkContainer to="/tim ">
                      <a>
                        {' '}
                        <li>
                          {' '}
                          <i
                            style={{
                              color: 'red',
                              paddingRight: '10px',
                              fontSize: '1.5rem',
                            }}
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>{' '}
                          Likvidacija i stečaj{' '}
                        </li>
                      </a>
                    </LinkContainer>
                    <LinkContainer to="/oblasti">
                      <a>
                        {' '}
                        <li>
                          {' '}
                          <i
                            style={{
                              color: 'red',
                              paddingRight: '10px',
                              fontSize: '1.5rem',
                            }}
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>{' '}
                          Naknada štete{' '}
                        </li>
                      </a>
                    </LinkContainer>
                    <LinkContainer to="/tim ">
                      <a>
                        {' '}
                        <li>
                          {' '}
                          <i
                            style={{
                              color: 'red',
                              paddingRight: '10px',
                              fontSize: '1.5rem',
                            }}
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>{' '}
                          Pravo osiguranja{' '}
                        </li>
                      </a>
                    </LinkContainer>
                    <LinkContainer to="/oblasti">
                      <a>
                        {' '}
                        <li>
                          {' '}
                          <i
                            style={{
                              color: 'red',
                              paddingRight: '10px',
                              fontSize: '1.5rem',
                            }}
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>{' '}
                          Bankarsko pravo{' '}
                        </li>
                      </a>
                    </LinkContainer>
                  </ul>
                </Col>
                <Col md={4}>
                  <ul style={{ listStyleType: 'none' }}>
                    <LinkContainer to="/o-nama ">
                      <a>
                        {' '}
                        <li>
                          {' '}
                          <i
                            style={{
                              color: 'red',
                              paddingRight: '10px',
                              fontSize: '1.5rem',
                            }}
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>{' '}
                          Upravno pravo{' '}
                        </li>
                      </a>
                    </LinkContainer>
                    <LinkContainer to="/tim ">
                      <a>
                        {' '}
                        <li>
                          {' '}
                          <i
                            style={{
                              color: 'red',
                              paddingRight: '10px',
                              fontSize: '1.5rem',
                            }}
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>{' '}
                          Radno pravo{' '}
                        </li>
                      </a>
                    </LinkContainer>
                    <LinkContainer to="/oblasti">
                      <a>
                        {' '}
                        <li>
                          {' '}
                          <i
                            style={{
                              color: 'red',
                              paddingRight: '10px',
                              fontSize: '1.5rem',
                            }}
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>{' '}
                          Socijalno pravo{' '}
                        </li>
                      </a>
                    </LinkContainer>
                    <LinkContainer to="/tim ">
                      <a>
                        {' '}
                        <li>
                          {' '}
                          <i
                            style={{
                              color: 'red',
                              paddingRight: '10px',
                              fontSize: '1.5rem',
                            }}
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>{' '}
                          Porodično pravo{' '}
                        </li>
                      </a>
                    </LinkContainer>
                    <LinkContainer to="/oblasti">
                      <a>
                        {' '}
                        <li>
                          {' '}
                          <i
                            style={{
                              color: 'red',
                              paddingRight: '10px',
                              fontSize: '1.5rem',
                            }}
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>{' '}
                          Nasljedno pravo{' '}
                        </li>
                      </a>
                    </LinkContainer>
                    <LinkContainer to="/tim ">
                      <a>
                        {' '}
                        <li>
                          {' '}
                          <i
                            style={{
                              color: 'red',
                              paddingRight: '10px',
                              fontSize: '1.5rem',
                            }}
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>{' '}
                          Krivično pravo{' '}
                        </li>
                      </a>
                    </LinkContainer>
                    <LinkContainer to="/oblasti">
                      <a>
                        {' '}
                        <li>
                          {' '}
                          <i
                            style={{
                              color: 'red',
                              paddingRight: '10px',
                              fontSize: '1.5rem',
                            }}
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>{' '}
                          Zaštita potrošača{' '}
                        </li>
                      </a>
                    </LinkContainer>
                  </ul>
                </Col>
              </Row>
            </ul>{' '}
          </Col>
        </Row>
        <Row style={{ borderTop: '1px solid #fafafa' }}>
          <Col
            style={{ textAlign: 'center', fontSize: '.9rem', padding: '5px 0' }}
            xs={12}
          >
            2020 © Sjerikov, Sva prava zadržana.
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
