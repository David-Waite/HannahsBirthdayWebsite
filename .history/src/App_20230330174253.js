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
    const oneDay = 1000 * 60 * 60 * 24;

    const daysUntilBirthday =
      Math.ceil(hannahBday.getTime() - date.getTime()) / oneDay;
    return daysUntilBirthday;
  }

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
  if (isBirthdayToday()) {
    birthdayText = <h1>Happy birthday!🥳</h1>;
  } else {
    birthdayText = (
      <>
        <h1>No birthday today</h1>
        <h2>but birthday in:</h2>
        <p>{Math.floor(getDaysUntilBirthday())} days</p>
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
