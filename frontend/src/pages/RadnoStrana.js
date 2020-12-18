import React from 'react';
import { Container } from 'react-bootstrap';
import KontaktForma from '../components/KontaktForma';

const RadnoStrana = () => {
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
      <Container>
        <h1 className="naslovi">
          <span style={{ color: 'red' }}>Radno</span> Pravo
        </h1>
        <div style={{ display: 'inline-block' }}>
          <img src="/imgs/radno.jpg" className="oblastImg" alt="" />
          <p>
            Radno pravo je oblast od velikog značaja i za radnika i za
            poslodavca.
            <br /> <br /> Za pravilno i zakonito obavljanje djelatnosti potrebno
            je da su radnopravni odnosi između njih u skladu sa važećim
            propisima.
            <br /> <br /> Svojim klijentima nudimo sljedeće usluge:
            <br /> <span style={{ color: 'red', fontSize: '2rem' }}>*</span>
            Savjetovanje u oblasti zapošljavanja radnika;
            <br /> <span style={{ color: 'red', fontSize: '2rem' }}>*</span>
            Zastupanje u postupku zaštite prava radnika kod njihovog poslodavca;
            Izrada nacrta svih vrsta opštih i posebnih pravnih akata privrednih
            društava iz oblasti radnoga prava kao što su poslovnici o radu,
            razna rješenja i td.;
            <br /> <span style={{ color: 'red', fontSize: '2rem' }}>*</span>
            Pronalaženje najboljih rješenja za obje strane u procesu zasnivanja
            radnog odnosa, sve do njegovog okončanja.
          </p>
        </div>
      </Container>
      <div>
        <KontaktForma />
      </div>
    </>
  );
};

export default RadnoStrana;
