import React from "react";
import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import BoardPage from "./pages/BoardPage";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/sign-in" exact={true} component={SignInPage} />
        <Route path="/sign-up" exact={true} component={SignUpPage} />
        <Route path="/board" exact={true} component={BoardPage} />
      </Container>
    </div>
  );
}

export default App;
