import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import BooksNavbar from './components/BooksNavbar';
import ContentArea from './components/ContentArea';
import AddBookForm from './components/AddBookForm';
import {Route, Redirect, Switch} from 'react-router-dom';
import NotFound from './components/NotFound';

function App() {
  return (
   <React.Fragment>
      <BooksNavbar />
      <main>
        <Switch>
          <Route path="/booklist" component={ContentArea}></Route>
          <Route path="/form/new" component={AddBookForm}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/booklist" />
          <Redirect to="/not-found"/>
        </Switch>
      </main>
   </React.Fragment>
  );
}

export default App;
