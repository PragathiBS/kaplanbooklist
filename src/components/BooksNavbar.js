import React from 'react';
import {Navbar, Button, Container} from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function BooksNavbar(props) {
    const location = useLocation();
    return (
        <Navbar className="mb-2" bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Link to="/">
                    <Navbar.Brand className="ml-2"><b>Books</b></Navbar.Brand>
                </Link>
                {
                    location.pathname === "/booklist" &&
                    (
                        <Link to="/form/new">
                            <Button variant="primary">Create New Book</Button>
                        </Link>
                    )
                }
            </Container>
        </Navbar>
    );
}

export default BooksNavbar;
