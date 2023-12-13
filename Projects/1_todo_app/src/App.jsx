import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Title from "./components/Title";
import AddTask from "./components/AddTask";
import Task1 from "./components/Task1";
import Task2 from "./components/Task2";

function App() {
  return (
    <>
      <Title />

      <center class="AddTask-container">
        <AddTask />
      </center>
      <center class="Task-container">
        <Task1 />
        <Task2 />
      </center>
    </>
  );
}

export default App;
