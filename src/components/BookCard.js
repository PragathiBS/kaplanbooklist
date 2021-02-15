import React from 'react';
import { Card } from 'react-bootstrap';

function BookCard(props) {
    return (
      <Card style={{ width: "18rem" }} className="card">
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>Authors: {props.authors}</Card.Text>
          <Card.Text>Publisher: {props.publisher}</Card.Text>
          <Card.Text>Published Date: {props.publishedDate}</Card.Text>
        </Card.Body>
      </Card>
    );
}

export default BookCard;