import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './components/About/About';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import AllService from './components/AllService/AllService';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/service">
          <AllService></AllService>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
