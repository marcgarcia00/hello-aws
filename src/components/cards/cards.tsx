import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';


type Card = {
  id: string;
  display: string;
  rank: number;
}

const displayCards: Card[] = [
  { id: 'a', display: 'WILD', rank: 0 },
  { id: 'b', display: '?', rank: 0},
  { id: '1', display: '1', rank: 1 },
  { id: '2', display: '2', rank: 2 },
  { id: '3', display: '3', rank: 3 },
  { id: '4', display: '5', rank: 5 },

]

function CardList(props: any) {
  const [ activeCard, setActiveCard ] = useState("");
  
  const setVote = (id: any) => {
    setActiveCard(id);
  }

  let cards: any[] = []
  displayCards.map(card => {
    cards.push(
      <button key={`card-${card.display}`} 
      className={`flex flex-col items-center justify-center text-3xl 
      h-28 w-20 border-2 border-bg-gray-400 rounded border-solid p-2 
      cursor-pointer ${ card.id === activeCard ? 'bg-green-400 text-white border-green-600' : ''}`}
      value={card.id}
      onClick={()=> setVote(card.id)}>
        {card.display}
      </button>
    );
  })
  return (
    <div className="grid grid-cols-3 gap-3">
      {cards}
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    room: state.room
  }
}

export default connect(
  mapStateToProps
)(CardList);