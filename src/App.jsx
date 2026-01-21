// import React from "react";

// import Login from "./components/Auth/Login";
import TaskLList from "./components/TaskList/TaskLList";
import TaskListNumbers from "./components/TaskList/TaskListNumbers";
import Header from "./Others/Header";

function App() {
  return (
    // <Login />
    <div className=" flext h-screen w-screen justify-between items-center p-10 bg-[#1C1C1C] ">
      <Header />
      <TaskListNumbers />
      <TaskLList />
    </div>
  );
}

export default App;
