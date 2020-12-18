import React from 'react';
import { Container } from 'react-bootstrap';
import KontaktForma from '../components/KontaktForma';

const PriverdnoStrana = () => {
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
          <span style={{ color: 'red' }}>Privredno</span> pravo
        </h1>
        <div style={{ display: 'inline-block' }}>
          <img src="/imgs/privredno.jpg" className="oblastImg" alt="" />
          <p>
            Privredno pravo je naša primarna oblast djelovanja, u kojoj imamo
            dugogodišnje iskustvo.
            <br /> <br />
            Čitav niz domaćih, regionalnih i svjetskih privrednih subjekata se
            odlučilo upravo za našu Kancelariju kao zastupnika i partnera u svom
            poslovanju na tržištu Republike Srpske i Bosne i Hercegovine.
            <br /> <br />
            Usluge koje nudimo svojim klijentima u ovoj oblasti su usmjerene ka
            usklađivanju poslovanja svih vrsta pravnih lica sa dinamičnim
            propisima na republičkom i državnom nivou, što je preduslov za
            uspješno djelovanje na domaćem tržištu.
          </p>
        </div>

        <div>
          <p>
            Svojim klijentima pružamo sljedeće usluge:
            <br />
            <br />
            <span style={{ color: 'red', fontSize: '2rem' }}>*</span> osnivanje
            privrednih društava (u svim zakonskim pravnim formama: ortačko
            društvo, komanditno društvo, društvo sa ograničenom odgovornošću te
            zatvoreno i otvoreno akcionarsko društvo) u skladu sa potrebama
            klijenta i osnivanje poslovnih jedinica stranih privrednih društava;
            <br />
            <span style={{ color: 'red', fontSize: '2rem' }}>*</span>{' '}
            savjetovanje povodom svih pravnih instituta privrednog, poslovnog,
            kompanijskog i trgovinskog prava, te pravna kvalifikacija ideja i
            planova klijenta;
            <br />
            <span style={{ color: 'red', fontSize: '2rem' }}>*</span> izrada
            osnivačkih i svih drugih akata privrednog društva;
            <br />
            <span style={{ color: 'red', fontSize: '2rem' }}>*</span> zastupanje
            pravnih lica u svim postupcima neophodnim za njihovo uspješno
            poslovanje;
            <br />
            <span style={{ color: 'red', fontSize: '2rem' }}>*</span>{' '}
            pribavljanje svih oblika dozvola, saglasnosti i ostalih akata
            potrebnih za obavljanje posebnih djelatnosti privrednih društava;
            <br />
            <span style={{ color: 'red', fontSize: '2rem' }}>*</span>{' '}
            povezivanje i reorganizacija privrednih društava
          </p>
        </div>
      </Container>
      <div>
        <KontaktForma />
      </div>
    </>
  );
};

export default PriverdnoStrana;
