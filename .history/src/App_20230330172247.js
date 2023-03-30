import "./App.css";

import Confetti from "react-confetti";
import { useState } from "react";

function App() {
  const [confetti, setConfetti] = useState(null);

  function rainConfetti() {
    setConfetti(true);
  }

  function isBirthdayToday() {
    const date = new Date();

    if (date.getMonth() === 3 && date.getDate() === 5) {
      return true;
    }
    return false;
  }

  function getDaysUntilBirthday() {
    const date = new Date();
    const hannahBday = new Date(date.getFullYear(), 3, 5);
    console.log(hannahBday);

    const days = (date.getDate() - hannahBday) / 1000 / 60 / 60 / 60 / 24;
    console.log(date);
    console.log(hannahBday);
  }

  getDaysUntilBirthday();

  let buttonText = "";

  if (confetti == null) {
    buttonText = "Confetti time?";
  } else if (confetti) {
    buttonText = "Yes";
  } else {
    buttonText = "Not yet";
  }
  // 5th april
  let birthdayText = "";
  console.log(isBirthdayToday());
  const date = new Date();

  return (
    <div className="App">
      {confetti && <Confetti />}
      <h1>Happy birthday!🥳</h1>
      <button onClick={rainConfetti}>{buttonText}</button>
    </div>
  );
}

export default App;
