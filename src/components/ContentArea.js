import React, { useEffect, useState } from 'react';
import CourseCards from './CourseCards';
import SearchBar from './SearchBar';
import { Container } from 'react-bootstrap';
import { addBooksFromAPI, getBooks, bookAdded, setIsBookAdded } from './../fakeBooksService';
import AlertNotification from '../common/AlertNotification';

function ContentArea({history}) {
    const [booksData, setBooksData] = useState([]);
    const [inputVal, setInputVal] = useState("");
    const [alert, setAlert] = useState(false);
    let matchedBooks;
    
    useEffect(() => {
      console.log(history)
      if(getBooks().length === 0) {
        fetch('https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep')
        .then(response => response.json())
        .then(data => {
            addBooksFromAPI(data.items);
            setBooksData(getBooks());
        })
        .catch(error => console.log(error));
        return;
      }
      setBooksData(getBooks());
      if (bookAdded() === true) {
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 3000);
        setIsBookAdded();
      }
    }, []);


    const handleChange = (event) => {
        setInputVal(event.target.value);
        matchedBooks = getBooks().filter((book) => {
          return (
            book.volumeInfo.title
              .toLowerCase()
              .includes(event.target.value.toLowerCase()) ||
            book.volumeInfo.authors
              .toString()
              .toLowerCase()
              .includes(event.target.value.toLowerCase()) ||
            book.volumeInfo.publisher
              .toLowerCase()
              .includes(event.target.value.toLowerCase())
          );
        });
        setBooksData(matchedBooks);
      };

    return (
      <Container>
          {
            alert && (
            <AlertNotification
              variant="success"
              handleShow={setAlert}
              text={"Successful! Added a new book."}
            />
          )
        }
        <SearchBar searchData={inputVal} onInputSearchData={handleChange}/>
        {
          booksData.length > 0 ?
          <div>
            <p className="ml-3"> Showing {booksData.length} out of {getBooks().length} books. </p>
            <h5 className="mx-3 mt-3 mb-2">All Books</h5>
            <CourseCards data={booksData}/>
          </div> :
          <p className="ml-3"> No books available. </p>
        }
      </Container>
    );
}

export default ContentArea;