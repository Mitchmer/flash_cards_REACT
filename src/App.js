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

  getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  addCard = (front, back) => {
    const { cards } = this.state;
    const card = { front, back }
    this.setState({ cards: [card, ...cards ]})
  }

  render() {
    const { cards } = this.state

    return (
      <div>
        <CardForm addCard={this.addCard} />
        <Deck name="Card List" cards={cards} />
      </div>
    );
  }
}

export default App;
