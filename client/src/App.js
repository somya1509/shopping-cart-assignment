import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/Signin/signin";
import Register from "./components/Register/Register";
import Products from "./components/Products/Products";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route path="/products/:id" component={Products} />
          <Route path="/signin" component={SignIn} />
          <Route path="/register" component={Register} />
        </Switch>
        <Footer />
      </BrowserRouter>
      {/* <SignIn /> */}
    </div>
  );
}

export default App;
