import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTask = () => {
  const [employees] = useContext(AuthContext);

  return (
    <div className="h-[34%]">
      <div className="mt-4">
        <div className="bg-blue-500 px-4 py-3 mb-2 flex justify-between rounded font-bold">
          <h2 className="w-1/5 text-lg font-medium  ">Employee Name</h2>
          <h5 className="w-1/5 text-lg font-medium ">New Task</h5>
          <h5 className="w-1/5 text-lg font-medium ">Active Task</h5>
          <h5 className="w-1/5 text-lg font-medium ">Completed</h5>
          <h3 className="w-1/5 text-lg font-medium ">Failed</h3>
        </div>
      </div>

      {/* ROWS ONLY (scrollable) */}
      <div id="Tasklist" className="h-[80%] overflow-auto">
        {employees.map((elem, idx) => (
          <div
            key={idx}
            className=" border-2 border-emerald-500 px-4 py-3 mb-2 flex justify-between rounded"
          >
            <h2 className="w-1/5  text-lg font-medium ">{elem.firstName}</h2>
            <h5 className="w-1/5 text-blue-500 px-3 text-lg font-medium ">
              {elem.taskCounts.newTask}
            </h5>
            <h5 className="w-1/5 text-yellow-400 px-3 text-lg font-medium ">
              {elem.taskCounts.active}
            </h5>
            <h5 className="w-1/5 text-white px-3 text-lg font-medium ">
              {elem.taskCounts.completed}
            </h5>
            <h3 className="w-1/5 text-red-600 px-3 text-lg font-medium  ">
              {elem.taskCounts.failed}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
