import React from 'react';

type Card = {
  display: string;
  rank: number;
}

const displayCards: Card[] = [
  { display: '?', rank: 0},
  { display: '1', rank: 1 },
  { display: '2', rank: 2 },
  { display: '3', rank: 3 },
  { display: '5', rank: 5 },

]

function CardList() {
  let cards: any[] = []
  displayCards.map(card => {
    cards.push(
      <div className="flex flex-row border border-bg-gray-400 rounded border-solid ">
        {card.display}
      </div>
    );
  })
  return (
    <div>
      <div>SECOND TEST</div>
      <div className="flex flex-col flex-wrap">
        {cards}
      </div>
    </div>
  );
}
export default CardList;