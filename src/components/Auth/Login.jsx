export default function Login() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="border-2 border-emerald-600 flex flex-col items-center justify-center p-20 rounded-xl">
        <form className="flex flex-col items-center justify-center">
          <input
            required
            className="outline-none bg-transparent border-2 border-emerald-600 rounded-full px-4 py-2 placeholder:text-gray-500 mb-1"
            type="email"
            placeholder="Enter your email"
          />
          <input
            required
            className="outline-none bg-transparent border-2 border-emerald-600 rounded-full px-4 py-2 placeholder:text-gray-500 mt-3"
            type="password"
            placeholder="Enter your password"
          />
          <button className="bg-emerald-400 px-21 py-2 rounded-full mt-5 border-none outline-none  text-white hover:bg-emerald-700 ">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
