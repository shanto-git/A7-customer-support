const Progress = ({ inProgress, resolve }) => {
  return (
    <div className="flex flex-col gap-6 w-full md:flex-row md:gap-6">
      {/* In-Progress Card */}
      <div  className="card bg-gradient-to-r from-indigo-500 to-purple-400 rounded-box grid place-items-center w-full h-48 md:w-[708px] md:h-50 p-6">
        <h3 className="text-white text-xl">In-Progress</h3>
        <h1 className="text-white text-6xl md:text-8xl font-bold">
          {inProgress}
        </h1>
      </div>

      {/* Resolved Card */}
      <div className="card bg-gradient-to-r from-green-500 to-sky-800 rounded-box grid place-items-center w-full h-48 md:w-[708px] md:h-50 p-6">
        <h3 className="text-white text-xl">Resolved</h3>
        <h1 className="text-white text-6xl md:text-8xl font-bold">{resolve}</h1>
      </div>
    </div>
  );
};

export default Progress;
