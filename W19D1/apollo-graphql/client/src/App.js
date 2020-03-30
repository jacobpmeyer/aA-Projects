import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BookIndex from "./pages/BookIndex";
import BookShow from "./pages/BookShow";
import AuthorIndex from "./pages/AuthorIndex";
import AuthorShow from "./pages/AuthorShow";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={BookIndex} />
        <Route path="/book/:bookId" component={BookShow} />
        <Route exact path="/authors" component={AuthorIndex} />
        <Route path="/authors/:authorId" component={AuthorShow} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
