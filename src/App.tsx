import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Elements from './components/Elements';

function App() {
  const [isButtonClicked, setIsButtonClicked] = useState(false)

  const onClickButton = () => {
    setIsButtonClicked(!isButtonClicked)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <Button onClickButton={onClickButton}/>
        <Elements isClicked={isButtonClicked}/>
      </header>
    </div>
  );
}

export default App;
