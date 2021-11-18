// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Products } from './components/Products/Products';
import { ProductDetails } from './components/Products/ProductDetails';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/products" component={Products}></Route>
        <Route path="/product/:id" component={ProductDetails}></Route>
        <Route>
          404 Page Not Found
        </Route>
      </Switch>

    </div>
  );
}

export default App;
