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
          <Route path="/kaplanbooklist/booklist" component={ContentArea}></Route>
          <Route path="/kaplanbooklist/form/new" component={AddBookForm}></Route>
          <Route path="/kaplanbooklist/not-found" component={NotFound}></Route>
          <Redirect from="/kaplanbooklist" exact to="/kaplanbooklist/booklist" />
          <Redirect to="/kaplanbooklist/not-found"/>
        </Switch>
      </main>
   </React.Fragment>
  );
}

export default App;
