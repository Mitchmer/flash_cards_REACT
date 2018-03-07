import React, { Component } from 'react';
import Deck from './Deck';
import CardForm from './CardForm';

class App extends Component {
  state = {
    cards: [
      {front: 'This is the front', back: 'This is the back'},
      {front: 'This is also the front', back: 'This is also the back'},
      {front: 'Fore', back: 'Aft'}
    ]
  }

  render() {
    const { cards } = this.state
    return (
      <div>
        <CardForm />
        <Deck name="Card List" cards={cards} />
      </div>
    );
  }
}

export default App;
