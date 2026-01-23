const CreateTask = () => {
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form className="flex flex-wrap items-start justify-between bg-[#1C1C1C]  w-full p-5 rounded-md">
        <div className="w-1/2">
          <div>
            <h3 className="text-gray-300 mb-0.5 text-sm">Task Title</h3>
            <input
              className="border rounded-sm w-100 border-gray-400 py-1 px-2 text-sm mb-4 outline-none bg-transparent"
              type="text"
              placeholder="add new task here"
            />
          </div>
          <div>
            <h3 className=" text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              className="border rounded-sm w-100 border-gray-50 py-1 px-2 text-sm mb-4 outline-none bg-transparent"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-gray-300 mb-0.5 text-sm">Assign To</h3>
            <input
              className="border rounded-sm w-100 border-gray-50 py-1 px-2 text-sm mb-4 outline-none bg-transparent"
              type="text"
              placeholder="employee name"
            />
          </div>
          <div>
            <h3 className="text-gray-300 mb-0.5 text-sm">Catagory</h3>
            <input
              className="border rounded-sm w-100 border-gray-50 py-1 px-2 text-sm mb-4 outline-none bg-transparent"
              type="text"
              placeholder="design, dev, etc"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
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
