import React from 'react';
import { Alert, Row, Col } from "react-bootstrap";

function AlertNotification({ variant, handleShow, text }) {
    return (
      <Row>
        <Col xs={6}>
        <Alert variant={variant} onClose={() => handleShow(false)} dismissible>
          <Alert.Heading>{text}</Alert.Heading>
        </Alert>
        </Col>
      </Row>
    );
  }

export default AlertNotification;