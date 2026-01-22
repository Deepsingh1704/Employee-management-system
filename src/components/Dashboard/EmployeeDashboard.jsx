import TaskLList from "../TaskList/TaskLList";
import TaskListNumbers from "../TaskList/TaskListNumbers";
import Header from "../../others/Header";

const EmployeeDashboard = () => {
  return (
    <div className=" flext h-screen w-screen justify-between items-center p-10 bg-[#1C1C1C] ">
      <Header />
      <TaskListNumbers />
      <TaskLList />
    </div>
  );
};

export default EmployeeDashboard;
