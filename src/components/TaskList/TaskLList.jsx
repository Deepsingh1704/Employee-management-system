const TaskLList = ({ data }) => {
  return (
    <div
      id="Tasklist"
      className=" h-[58%] w-full mt-10 py-5 flex flex-nowrap justify-start items-center gap-5 rounded-md overflow-x-auto "
    >
      <div className="bg-red-300 h-full w-75 rounded-xl shrink-0 p-5 ">
        <div className="flex justify-between items-center">
          <h2 className="text-sm bg-red-500 px-2 py-1 rounded-sm">high</h2>
          <h3 className="text-sm font-bold">{data.tasks[0].taskDate}</h3>
        </div>
        <h3 className="mt-4 font-bold text-2xl">
          complete it as fast as possible
        </h3>
        <p className="mt-3 text-sm font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          assumenda accusamus quibusdam dignissimos pariatur.
        </p>
      </div>
      <div className="bg-green-300 h-full w-75 rounded-xl shrink-0 p-5 ">
        <div className="flex justify-between items-center">
          <h2 className="text-sm bg-red-500 px-2 py-1 rounded-sm">high</h2>
          <h3 className="text-sm font-bold">22jan 2025</h3>
        </div>
        <h3 className="mt-4 font-bold text-2xl">
          complete it as fast as possible
        </h3>
        <p className="mt-3 text-sm font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          assumenda accusamus quibusdam dignissimos pariatur.
        </p>
      </div>
      <div className="bg-blue-300 h-full w-75 rounded-xl shrink-0 p-5 ">
        <div className="flex justify-between items-center">
          <h2 className="text-sm bg-red-500 px-2 py-1 rounded-sm">high</h2>
          <h3 className="text-sm font-bold">22jan 2025</h3>
        </div>
        <h3 className="mt-4 font-bold text-2xl">
          complete it as fast as possible
        </h3>
        <p className="mt-3 text-sm font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          assumenda accusamus quibusdam dignissimos pariatur.
        </p>
      </div>
      <div className="bg-yellow-300 h-full w-75 rounded-xl shrink-0 p-5 ">
        <div className="flex justify-between items-center">
          <h2 className="text-sm bg-red-500 px-2 py-1 rounded-sm">high</h2>
          <h3 className="text-sm font-bold">22jan 2025</h3>
        </div>
        <h3 className="mt-4 font-bold text-2xl">
          complete it as fast as possible
        </h3>
        <p className="mt-3 text-sm font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          assumenda accusamus quibusdam dignissimos pariatur.
        </p>
      </div>
      <div className="bg-purple-300 h-full w-75 rounded-xl shrink-0 p-5 ">
        <div className="flex justify-between items-center">
          <h2 className="text-sm bg-red-500 px-2 py-1 rounded-sm">high</h2>
          <h3 className="text-sm font-bold">22jan 2025</h3>
        </div>
        <h3 className="mt-4 font-bold text-2xl">
          complete it as fast as possible
        </h3>
        <p className="mt-3 text-sm font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          assumenda accusamus quibusdam dignissimos pariatur.
        </p>
      </div>
    </div>
  );
};

export default TaskLList;
