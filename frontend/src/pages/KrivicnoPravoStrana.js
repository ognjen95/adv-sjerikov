import React from 'react';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const KrivicnoPravoStrana = () => {
  return (
    <>
      <Jumbotron
        className="jumbo"
        fluid
        style={{
          backgroundImage: 'url(imgs/cekic.jpg)',
          backgroundSize: 'cover',
          height: '70vh',
        }}
      >
        <Container>
          {/* <div style={{marginTop:'15%'}}>
            <h1><span style={{color:'red'}}>Oblasti</span> u kojima smo specijalizovani</h1>
          
      </div> */}
        </Container>
      </Jumbotron>
    </>
  );
};

export default KrivicnoPravoStrana;
