import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import AlertMessage from '../components/AlertMessage';
import axios from 'axios';

const KontaktForma = (e) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [messageText, setMessage] = useState('');
  const [alert, setAlert] = useState('');
  const [success, setSuccess] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    let data = {
      name,
      email,
      phone,
      messageText,
    };

    try {
      const res = await axios.post('/email', data, config);
      console.log(res);
      if (res.status === 200) {
        setSuccess(true);
        document.querySelector('#alertMessage').style.display = 'block';
        setAlert('Vaša poruka je poslana!');
      } else {
        setSuccess(false);
        setAlert('Poruka nije poslana, pokušajte kasnije.');
        document.querySelector('#alertMessage').style.display = 'block';
      }
    } catch (err) {
      setAlert('Poruka nije poslana, pokušajte kasnije.');
      document.querySelector('#alertMessage').style.display = 'block';
      console.error(err);
    }

    // [name, email, phone, messageText].forEach((item) => setState(''));
  };

  return (
    <>
      <Container>
        <h1 className="naslovi">
          <span style={{ color: 'red' }}> Pošaljite </span> nam zahtjev za
          saradnju
        </h1>
      </Container>
      <Container fluid>
        <Row
          style={{
            backgroundColor: '#141414',
            borderTop: '1px solid gray',
          }}
        >
          {/* KONTAKT FORMA */}
          <Col className="colNoPadding" xs={12} md={6}>
            <img
              style={{ width: '100%', height: '100%' }}
              src="/imgs/telefon.jpg"
              alt=""
            />
          </Col>

          <Col className="colNoPadding" xs={12} md={6}>
            <Container style={{ padding: '50px 0', width: '80%' }}>
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="formBasicName">
                  {/* <Form.Label>Vaše ime i prezime</Form.Label> */}
                  <Form.Control
                    required
                    type="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ime i prezime"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  {/* <Form.Label>Vaša e-mail adresa</Form.Label> */}
                  <Form.Control
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Vaša email adresa"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicNumber">
                  {/* <Form.Label>Vaš broj telefona</Form.Label> */}
                  <Form.Control
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Vaš broj telefona"
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Pošaljite nam pitanje</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    value={messageText}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                  />
                </Form.Group>
                <div id="googleMaps"></div>
                {success ? (
                  <AlertMessage text={alert} variant={'success'} />
                ) : (
                  <AlertMessage text={alert} variant={'danger'} />
                )}
                <Button size="lg" variant="outline-light" type="submit">
                  POŠALJI{' '}
                </Button>{' '}
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default KontaktForma;
