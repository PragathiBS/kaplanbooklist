import React, { useState, useEffect } from "react";
import Joi from "joi-browser";
import { Form, Button, Container } from "react-bootstrap";
import Input from "./../common/Input";
import { addNewBook } from "./../fakeBooksService";

const AddBookForm = ({ history, match }) => {
  const [{ bookData, errorData }, setBookData] = useState({
    bookData: { title: "", authors: "", publisher: "", publishedDate: "" },
    errorData: {},
  });

  function populateBookData() {
    try {
      if (match.path === "/kaplanbooklist/form/new") {
        setBookData(() => {
          return {
            bookData: {
              title: "",
              authors: "",
              publisher: "",
              publishedDate: "",
            },
            errorData: {},
          };
        });
        return;
      }
    } catch (ex) {
        history.replace("/kaplanbooklist/not-found");
    }
  }

  useEffect(() => {
    populateBookData();
  }, []);

  const schema = {
    title: Joi.string().required().label("Title"),
    authors: Joi.string().required().label("Authors"),
    publisher: Joi.string().required().label("Publisher"),
    publishedDate: Joi.string().required().label("Published Date"),
  };

  function validate() {
    const options = { abortEarly: false };
    const { error } = Joi.validate(bookData, schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  }

  function validateProperty(name, value) {
    const obj = { [name]: value };
    const requiredSchema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, requiredSchema);
    return error ? error.details[0].message : null;
  }

  function handleChange(event) {
    const { name, value } = event.target;
    const errors = { ...errorData };
    const errorMessage = validateProperty(name, value);
    if (errorMessage) errors[name] = errorMessage;
    else delete errors[name];

    setBookData((prevBookData) => {
      return {
        bookData: { ...prevBookData.bookData, [name]: value },
        errorData: errors,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const errors = validate();
    setBookData((prevBookData) => {
      return {
        bookData,
        errorData: errors,
      };
    });
    if (errors) return;

    let { title, authors, publisher, publishedDate } = bookData;

    addNewBook({
      ["volumeInfo"]: {
        title,
        authors: authors.split(","),
        publisher,
        publishedDate,
      },
    });
    history.replace("/kaplanbooklist");
  }

  return (
    <Container className="mt-4">
      <Form onSubmit={handleSubmit}>
        <Input
          name="title"
          value={bookData.title}
          label="Title"
          onChange={handleChange}
          error={errorData["title"]}
        />
        <Input
          name="authors"
          value={bookData.authors}
          label="Authors"
          onChange={handleChange}
          error={errorData["authors"]}
        />
        <Input
          name="publisher"
          value={bookData.publisher}
          label="Publisher"
          onChange={handleChange}
          error={errorData["publisher"]}
        />
        <Input
          name="publishedDate"
          value={bookData.publishedDate}
          label="Published Date"
          onChange={handleChange}
          error={errorData["publishedDate"]}
        />

        <Button variant="primary" disabled={validate()} type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddBookForm;
