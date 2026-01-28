import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setNewTask({
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: true,
    });
    const data = userData;

    setUserData(data);

    data.forEach((elem) => {
      if (assignTo == elem.firstName) {
        elem.tasks.push(newTask);
      }
    });

    localStorage.setItem("employees", JSON.stringify(data));

    setTaskTitle("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
    setTaskDescription("");
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap items-start justify-between bg-[#1C1C1C]  w-full p-5 rounded-md"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-gray-300 mb-0.5 text-sm">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              className="border rounded-sm w-100 border-gray-400 py-1 px-2 text-sm mb-4 outline-none bg-transparent"
              type="text"
              placeholder="add new task here"
            />
          </div>
          <div>
            <h3 className=" text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              className="border rounded-sm w-100 border-gray-50 py-1 px-2 text-sm mb-4 outline-none bg-transparent"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-gray-300 mb-0.5 text-sm">Assign To</h3>
            <input
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              className="border rounded-sm w-100 border-gray-50 py-1 px-2 text-sm mb-4 outline-none bg-transparent"
              type="text"
              placeholder="employee name"
            />
          </div>
          <div>
            <h3 className="text-gray-300 mb-0.5 text-sm">Catagory</h3>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="border rounded-sm w-100 border-gray-50 py-1 px-2 text-sm mb-4 outline-none bg-transparent"
              type="text"
              placeholder="design, dev, etc"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400"
            cols="30"
            rows="10"
          ></textarea>
          <button className="bg-emerald-500 py-2 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full ">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
