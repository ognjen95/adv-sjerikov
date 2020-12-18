import React, { useState } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  const [toggle, setToggled] = useState(false);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    var mybutton = document.getElementById('myBtn');
    var myNav = document.querySelector('#mynav');

    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      mybutton.style.display = 'block';
      // myNav.classList.add('nav-colored');
      // myNav.classList.remove('nav-transparent');
    } else {
      mybutton.style.display = 'none';
      // myNav.classList.add('nav-transparent');
      // myNav.classList.remove('nav-colored');
    }
  }

  return (
    <header>
      <Navbar
        expanded={toggle}
        onToggle={() => {
          setToggled(!toggle);

          const myNav = document.querySelector('#mynav');
          const toggledNav = document.querySelector('#toggledNav');
          if (!toggle) {
            myNav.classList.add('nav-colored');
            toggledNav.style.paddingBottom = '50px';

            toggledNav.style.height = '100vh';
            document.body.style.overflow = 'hidden';
          } else {
            myNav.classList.remove('nav-colored');
            myNav.classList.add('nav-transparent');
            toggledNav.style.paddingBottom = '0';
            document.body.style.overflow = 'visible';
            toggledNav.style.height = 'auto';
            toggledNav.style.paddingTop = '0';
          }
        }}
        id="mynav"
        variant="dark"
        expand="xs"
        collapseOnSelect
      >
        <LinkContainer to="/">
          <Navbar.Brand style={{ color: 'white' }}>
            <img id="logo" src="/imgs/logo.png" alt="" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle id="menu" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            id="toggledNav"
            className="ml-auto"
            style={{
              display: 'flex',
              // justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <LinkContainer to="/">
              <Nav.Link>POČETNA</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/oNama">
              <Nav.Link>O NAMA</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/oblasti">
              <Nav.Link>OBLASTI</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/kontakt">
              <Nav.Link>KONTAKT</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
