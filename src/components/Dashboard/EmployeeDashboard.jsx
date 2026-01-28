import TaskLList from "../TaskList/TaskLList";
import TaskListNumbers from "../TaskList/TaskListNumbers";
import Header from "../../others/Header";

const EmployeeDashboard = (props) => {
  // console.log(data);
  return (
    <div className=" flext h-screen w-screen justify-between items-center p-10 bg-[#1C1C1C] ">
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumbers data={props.data} />
      <TaskLList data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
