import React from 'react';
import Card from './Card';

const Deck = ({ cards, front, back }) => (
  <div>
    <div>
      { cards.map( card => 
        <div key={card.front}>
          <Card key={card.front} {...card} />
        </div>
        )
      }
    </div>
  </div>
)

export default Deck