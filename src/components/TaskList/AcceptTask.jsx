// import React from 'react'

const AcceptTask = () => {
  return (
    <div>
      <div className="bg-red-300 h-full w-75 rounded-xl shrink-0 p-5 ">
        <div className="flex justify-between items-center">
          <h2 className="text-sm bg-red-500 px-2 py-1 rounded-sm">high</h2>
          <h3 className="text-sm font-bold">make a video</h3>
        </div>
        <h3 className="mt-4 font-bold text-2xl">
          complete it as fast as possible
        </h3>
        <p className="mt-3 text-sm font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          assumenda accusamus quibusdam dignissimos pariatur.
        </p>
        <div className="flex justify-between mt-4">
          <button className="bg-green-500 py-1 px-2 text-sm ">
            Mark as Completed
          </button>
          <button className="bg-red-500 py-1 px-2 text-sm ">
            Mark as Failed
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcceptTask;
