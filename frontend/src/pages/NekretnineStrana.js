import React from 'react';
import { Container } from 'react-bootstrap';
import KontaktForma from '../components/KontaktForma';

const NekretnineStrana = () => {
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
          <span style={{ color: 'red' }}>Nekretnine</span>
        </h1>
        <div style={{ display: 'inline-block' }}>
          <img src="/imgs/nekretnine.jpg" className="oblastImg" alt="" />
          <p>
            Nekretnine su jedna od najvrjednijih vrsta imovine, i zato zaslužuju
            posebnu pažnju u pravnom prometu.
            <br />
            <br /> Za nastanak, promjenu i prestanak prava nad nekretninama
            neophodno je ispuniti niz zakonom propisanih uslova.
            <br />
            Našim klijentima nudimo usluge usmjerene na ispunjavanje ovih
            uslova, u skladu sa njihovim potrebama, te sigurnost u zakonito
            pravno prometovanje njihovih nekretnina, konstituisanje prava nad
            istim i tako dalje. Ove usluge su namijenjene svim klijentima -
            onima koji namjeravaju da monetizuju svoju nepokretnu imovinu, onima
            koji namjeravaju da steknu određeno pravo na nekretninama, kao i
            onima koji eventualno namjeravaju da opterete svoju nekretninu (npr.
            hipotekom).
            <br />
            <br />{' '}
          </p>
        </div>
        <div>
          <p>
            {' '}
            Svojim klijentima pružamo sljedeće usluge:
            <br />
            <span style={{ color: 'red', fontSize: '2rem' }}>*</span>{' '}
            Savjetovanje u vezi sa nekretninama, po pitanju svih pravnih
            instituta, zakonskih uslova i dr.
            <br /> <span style={{ color: 'red', fontSize: '2rem' }}>
              *
            </span>{' '}
            Zastupanje pred javnim organima
            <br />
            <span style={{ color: 'red', fontSize: '2rem' }}>*</span> Postupak
            pribavljanja svih potrebnih dozvola i dokumentacije za građenje
          </p>
        </div>
      </Container>
      <div>
        <KontaktForma />
      </div>
    </>
  );
};

export default NekretnineStrana;
