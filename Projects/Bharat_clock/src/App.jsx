import ClockTitle from "./components/ClockTitle";
import ClockTime from "./components/ClockTime";
import ClockMoto from "./components/ClockMoto";
import "./App.css";
function App() {
  return (
    <center>
      <ClockTitle />

      <ClockMoto />
      <br />

      <ClockTime />
    </center>
  );
}

export default App;
