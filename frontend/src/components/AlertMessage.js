import React from 'react';
import Alert from 'react-bootstrap/Alert';
const AlertMessage = ({ variant, text }) => {
  return (
    <div>
      <Alert id="alertMessage" variant={variant}>
        {text}
      </Alert>
    </div>
  );
};

export default AlertMessage;
