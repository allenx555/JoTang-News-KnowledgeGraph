import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import NotFound from "./views/NotFound";
import Home from "./views/Home";
import KnowledgeGraphPage from "./views/KnowledgeGraphPage";
import SearchResult from "./views/SearchResult";

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/knowledgegraph" component={KnowledgeGraphPage} />
    <Route path="/search" component={SearchResult} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default withRouter(App);