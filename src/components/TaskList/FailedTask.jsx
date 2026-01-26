const FailedTask = () => {
  return (
    <div className="bg-blue-300 h-full w-75 rounded-xl shrink-0 p-5 ">
      <div className="flex justify-between items-center">
        <h2 className="text-sm bg-red-500 px-2 py-1 rounded-sm">high</h2>
        <h3 className="text-sm font-bold">22jan 2025</h3>
      </div>
      <h3 className="mt-4 font-bold text-2xl">
        complete it as fast as possible
      </h3>
      <p className="mt-3 text-sm font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus assumenda
        accusamus quibusdam dignissimos pariatur.
      </p>
      <div className="mt24">
        <button className="w-full">Failed</button>
      </div>
    </div>
  );
};

export default FailedTask;
