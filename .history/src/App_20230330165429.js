import "./App.css";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

function App() {
  const { width, height } = useWindowSize();
  <Confetti width={width} height={height} />;
  return (
    <div className="App">
      <h1>It's your birthday🥳</h1>
      <button></button>
    </div>
  );
}

export default App;
