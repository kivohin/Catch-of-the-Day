import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
  constructor() {
    super();
    // Add addFish function to our state
    this.addFish = this.addFish.bind(this);
    // Set our empty state
    this.state = {
      fishes: {},
      order: {}
    };
  }

  addFish(fish) {
    // Make a copy of our state
    const fishes = {...this.state.fishes};
    // Add in our new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    // Set state
    this.setState({ fishes: fishes });
  }

  render() {
    return(
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    )
  }
}

export default App;