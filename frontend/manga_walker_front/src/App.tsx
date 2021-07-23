import BookComponent from "./components/BookComponent";
import AllContent from "./components/AllContent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React from "react";
import AddBookCoverComponent from "./components/AddBookCoverComponent";
import StoreBook from "./components/StoreBook";
import {RecoilRoot} from 'recoil'
import Book from "./components/Book";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route
            path="/book/:pageId"
            render={
              ({match}) => <Book match={match} />
            }
          />
          <Route path="/add/items">
            <RecoilRoot>
              <StoreBook />
            </RecoilRoot>
          </Route>
          <Route path="/add/books">
            <AddBookCoverComponent />
          </Route>
          <Route path="/all">
            <AllContent />
          </Route>
          <Route path="/">
            <BookComponent />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
