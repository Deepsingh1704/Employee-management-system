import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTask = () => {
  const [employees] = useContext(AuthContext);

  return (
    <>
      {/* HEADER (normal, no scroll) */}
      <div>
        <div className="bg-blue-500 px-4 py-3 mb-2 flex justify-between rounded font-bold">
          <h2 className="w-1/5">Employee Name</h2>
          <h5 className="w-1/5">New Task</h5>
          <h5 className="w-1/5">Active Task</h5>
          <h5 className="w-1/5">Completed</h5>
          <h3 className="w-1/5">Failed</h3>
        </div>
      </div>

      {/* ROWS ONLY (scrollable) */}
      <div className="h-[80%] overflow-auto">
        {employees.map((elem) => (
          <div
            key={elem.id}
            className="bg-blue-400 px-4 py-3 mb-2 flex justify-between rounded"
          >
            <h2 className="w-1/5">{elem.firstName}</h2>
            <h5 className="w-1/5">
              {elem.tasks?.filter((t) => t.newTask).length}
            </h5>
            <h5 className="w-1/5">
              {elem.tasks?.filter((t) => t.active).length}
            </h5>
            <h5 className="w-1/5">
              {elem.tasks?.filter((t) => t.completed).length}
            </h5>
            <h3 className="w-1/5">
              {elem.tasks?.filter((t) => t.failed).length}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllTask;
