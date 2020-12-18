import React from 'react';
import { Container } from 'react-bootstrap';
import KontaktForma from '../components/KontaktForma';

const IntelektualnaStrana = () => {
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
          <span style={{ color: 'red' }}>Pravo</span> Intelektualne svojine
        </h1>
        <div style={{ display: 'inline-block' }}>
          <img src="/imgs/copyright.jpg" className="oblastImg" alt="" />
          <p>
            Intelektualna svojina je jedna od naših primarnih oblasti, a kojom
            se naša Kancelarija bavi najduže u Bosni i Hercegovini.
            <br /> <br />
            Advokat Igor Sjerikov je prvi ovlašteni za zastupanje u postupcima
            sticanja i održavanja prava na industrijski dizajn, žigove i
            geografske oznake pred Institutom za intelektualnu svojinu u BiH.
            <br />
            <br /> Na osnovu dugogodišnjeg iskustva našim klijentima nudimo
            pružanje zaštite svim njihovim pravima intelektualne svojine
            (autorskih i srodnih prava i prava industrijske svojine) kako unutar
            Republike Srpske i Bosne i Hercegovine, tako i na međunarodnom
            nivou.
          </p>
        </div>
      </Container>
      <div>
        <KontaktForma />
      </div>
    </>
  );
};

export default IntelektualnaStrana;
