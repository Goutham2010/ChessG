// src/App.js

import React, { useState } from 'react';
import Chessboard from 'react-chessboard';
import { Chess } from 'chess.js';

const App = () => {
  const [game, setGame] = useState(new Chess());
  const [position, setPosition] = useState('start');

  const onDrop = ({ sourceSquare, targetSquare }) => {
    const gameCopy = { ...game };
    const move = gameCopy.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q', // always promote to a queen for simplicity
    });

    if (move === null) return;
    setPosition(gameCopy.fen());
    setGame(gameCopy);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Chessboard position={position} onDrop={onDrop} />
    </div>
  );
};

export default App;
