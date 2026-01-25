function TaskListNumbers({ data }) {
  return (
    <div className="flex screen gap-5 mt-10 justify-between ">
      <div className="rounded-xl w-[40%]  bg-red-300 py-6 px-9">
        <h2 className="text-2xl font-semibold">{data.taskCounts.newTask}</h2>
        <h3 className="text-xl font-bold">New Task</h3>
      </div>
      <div className="rounded-xl w-[40%]  bg-purple-300 py-6 px-9">
        <h2 className="text-2xl font-semibold">{data.taskCounts.completed}</h2>
        <h3 className="text-xl font-bold">Complete Task</h3>
      </div>

      <div className="rounded-xl w-[40%]  bg-yellow-300 py-6 px-9">
        <h2 className="text-2xl font-semibold">{data.taskCounts.active}</h2>
        <h3 className="text-xl font-bold">Accepted Task</h3>
      </div>
      <div className="rounded-xl w-[40%]  bg-green-300 py-6 px-9">
        <h2 className="text-2xl font-semibold">{data.taskCounts.failed}</h2>
        <h3 className="text-xl font-bold">Failed Task</h3>
      </div>
    </div>
  );
}

export default TaskListNumbers;
