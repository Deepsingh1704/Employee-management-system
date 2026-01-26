import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskLList = ({ data }) => {
  // console.log(data);
  return (
    <div
      id="Tasklist"
      className=" h-[58%] w-full mt-10 py-5 flex flex-nowrap justify-start items-center gap-5 rounded-md overflow-x-auto "
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} />;
        }
        if (elem.newTask) {
          return <NewTask key={idx} />;
        }
        if (elem.completed) {
          return <CompleteTask key={idx} />;
        }
        if (elem.failed) {
          return <FailedTask key={idx} />;
        }
      })}
    </div>
  );
};

export default TaskLList;
