import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import CardsList from "./components/CardsList";
import list from "./data";
import './styles/app-styles.css'

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [listItems, setlistItems] = useState(list);

  const updateScores = (id) => {
    const found = clickedCards.find(cardId => id === cardId);

    if (found) {
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
      setClickedCards([]);
      setCurrentScore(0) // reset current score to zero;
      return;
    }

    setCurrentScore(prevState => prevState + 1);
    setClickedCards(prevState => [...prevState, id]); 
  }

  const shuffle = () => {
    const tempArr = [...listItems];
    // algorithm for shuffle the array
    for (let i = tempArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      let temp = tempArr[i];
      tempArr[i] = tempArr[j];
      tempArr[j] = temp;
    }
    setlistItems([...tempArr]);
  }

  useEffect(() => {
    shuffle()
  }, [bestScore, currentScore]);

  return (
    <div className="App">
      <Header currentScore={currentScore} bestScore={bestScore} />
      <CardsList listItems={listItems} updateScores={updateScores} />
    </div>
  );
}

export default App;
