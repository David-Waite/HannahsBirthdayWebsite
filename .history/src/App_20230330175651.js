import "./App.css";

import Confetti from "react-confetti";

import { useState } from "react";

function App() {
  const [confetti, setConfetti] = useState(null);
  const [buttonText, setButtonText] = useState("Confetti time?");
  function isBirthdayToday() {
    const date = new Date();
    if (date.getMonth() === 2 && date.getDate() === 30) {
      return true;
    }
    return false;
  }

  function rainConfetti() {
    if (isBirthdayToday()) {
      setConfetti(true);
      setButtonText("Confetti time!");
    }
  }

  function getDaysUntilBirthday() {
    const date = new Date();
    const hannahBday = new Date(date.getFullYear(), 3, 5);
    const oneDay = 1000 * 60 * 60 * 24;

    const daysUntilBirthday =
      Math.ceil(hannahBday.getTime() - date.getTime()) / oneDay;
    return daysUntilBirthday;
  }

  // 5th april
  let birthdayText;
  if (isBirthdayToday()) {
    birthdayText = <h1>Happy birthday!🥳</h1>;
  } else {
    birthdayText = (
      <>
        <h1>No birthday today 😥</h1>
        <h2>Only {Math.floor(getDaysUntilBirthday())} days left</h2>
      </>
    );
  }
  console.log(isBirthdayToday());
  const date = new Date();

  return (
    <div className="App">
      {confetti && <Confetti />}

      {birthdayText}
      <button onClick={rainConfetti}>{buttonText}</button>
    </div>
  );
}

export default App;
