import TaskLList from "../TaskList/TaskLList";
import TaskListNumbers from "../TaskList/TaskListNumbers";
import Header from "../../others/Header";

const EmployeeDashboard = ({ data }) => {
  // console.log(data);
  return (
    <div className=" flext h-screen w-screen justify-between items-center p-10 bg-[#1C1C1C] ">
      <Header data={data} />
      <TaskListNumbers data={data} />
      <TaskLList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
