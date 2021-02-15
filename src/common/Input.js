import React from "react";
import { Form } from "react-bootstrap";

function Input({ name, value, label, error, onChange }) {
  return (
    <Form.Group>
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <Form.Control
        type="text"
        value={value}
        name={name}
        id={name}
        onChange={onChange}
        placeholder={`Enter ${label}`}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </Form.Group>
  );
}

export default Input;
