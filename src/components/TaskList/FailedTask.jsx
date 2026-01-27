const FailedTask = ({ data }) => {
  return (
    <div className="bg-blue-300 h-full w-75 rounded-xl shrink-0 p-5 ">
      <div className="flex justify-between items-center">
        <h2 className="text-sm bg-red-500 px-2 py-1 rounded-sm">
          {data.category}
        </h2>
        <h3 className="text-sm font-bold">{data.taskDate}</h3>
      </div>
      <h3 className="mt-4 font-bold text-2xl">{task.taskTitle}</h3>
      <p className="mt-3 text-sm font-semibold">{data.taskDescription}</p>
      <div className="mt-4 flex items-center justify-between ">
        <button className="ms-2 py-2 px-3 bg-red-600 rounded text-sm font-semibold">
          Mark as failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
