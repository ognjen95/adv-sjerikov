import React from 'react'
import {Modal, Button} from 'react-bootstrap' 
import  WrapperMap  from './GoogleMaps'

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
 
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Lokacija na Google Mapama
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <WrapperMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
           loadingElement={<div style={{ height: `100%` }} />}
           containerElement={<div style={{ height: `400px` }} />}
           mapElement={<div style={{ height: `100%` }} />}/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Zatvori</Button>
        </Modal.Footer>
      </Modal>
    );
  }
 export default MyVerticallyCenteredModal