import React from 'react';

const Deck = ({ cards, front, back }) => (
  <div>
    <div>
      { cards.map( card => 
        <div key={card.front}>
          <h1 key={card.front}>
            {card.front}
          </h1>
        </div>) 
      }
    </div>
  </div>
)

export default Deck