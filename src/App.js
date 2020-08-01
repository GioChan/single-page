import React, { Component } from 'react';
import './App.css';
import ListDrink from './pages/ListDrink';
import DetailDrink from './pages/DetailDrink';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import reduxStore from './redux/store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentUrl: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=manhattan',
    };
  }

  render() {
    return (
      <div className="App">
        <Provider store={reduxStore}>
          <Router>
            <Route exact path="/" component={ListDrink} />
            <Route exact path="/detaildrink" component={DetailDrink} />
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
