import React from 'react';
import { Button } from 'react-bootstrap';
const GoToTopBtn = () => {
  // When the user scrolls down 20px from the top of the document, show the button

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  return (
    <>
      <Button onClick={topFunction} id="myBtn">
        <i
          style={{ fontSize: '2.5rem' }}
          className="fa fa-angle-up"
          aria-hidden="true"
        ></i>
      </Button>
    </>
  );
};

export default GoToTopBtn;
