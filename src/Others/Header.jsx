function Header() {
  return (
    <div className="flex justify-between items-center">
      <h1 className=" flext justify-center items-center text-xl font-medium">
        Hello <br /> <span className="text-2xl font-semibold">Deep ✌️</span>
      </h1>
      <button className="bg-red-600 rounded-md text-white text-lg font-medium px-7 py-2">
        Log Out
      </button>
    </div>
  );
}

export default Header;
