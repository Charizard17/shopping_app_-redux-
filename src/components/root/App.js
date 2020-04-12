import React from 'react';
import { Container } from 'reactstrap';
import Navi from '../navi/Navi';
import Dashboard from './Dashboard';
import { Switch, Route } from 'react-router-dom';
import CartDetail from '../cart/CartDetail';
import AddOrUpdateProduct from '../products/AddOrUpdateProduct';
import NotFound from '../common/NotFound';
import FoodRecipe from '../cart/recipe/FoodRecipe';
import HomePage from '../homepage/HomePage';
import '../../App.css'


function App() {
  return (
    <div className="main">
      <Container>
        <Navi />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shopping" exact component={Dashboard} />
          <Route path="/product" exact component={Dashboard} />
          <Route path="/saveproduct/:productId" component={AddOrUpdateProduct} />
          <Route path="/saveproduct" component={AddOrUpdateProduct} />
          <Route path="/cart" exact component={CartDetail} />
          <Route path="/recipe" exact component={FoodRecipe} />
          <Route component={NotFound} />
        </Switch>
        {/* <Dashboard /> */}
      </Container>
    </div>
  );
}

export default App;
