import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
<<<<<<< HEAD
import { NotFound } from "./pages/NotFound";
=======
import Bloglist from "./pages/Bloglist";
import BlogDetails from "./pages/BlogDetails";
>>>>>>> master
import "./App.scss";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
<<<<<<< HEAD
        {/* <Route path="/blogs" component={Bloglist} exact />
        <Route path="/blogs/blog-details/:id/:title" component={BlogDetails} /> */}
        <Route component={NotFound} />
=======
        <Route path="/blogs" component={Bloglist} exact />
        <Route path="/blogs/blog-details/:id/:title" component={BlogDetails} />
>>>>>>> master
      </Switch>
    </HashRouter>
  );
}

export default App;
