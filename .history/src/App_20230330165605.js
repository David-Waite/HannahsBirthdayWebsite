import "./App.css";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

function App() {
  const { width, height } = useWindowSize();

  return (
    <div className="App">
      <Confetti width={100} height={100} />
      <h1>It's your birthday🥳</h1>
      <button>{confetti}</button>
    </div>
  );
}

export default App;
