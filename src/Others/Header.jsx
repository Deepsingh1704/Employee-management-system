// import { useState } from "react";

// import { useState } from "react";

const Header = () => {
  // console.log(data);

  // const [username, setUsername] = useState("");
  // if (!data) {
  //   setUsername("Admin");
  // } else {
  //   setUsername(data.firstName);
  // }

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    window.location.reload();
  };

  return (
    <div className="flex justify-between items-center">
      <h1 className=" flext justify-center items-center text-xl font-medium">
        Hello <br />
        <span className="text-2xl font-semibold"> username✌️</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 rounded-sm text-white text-md font-semibold px-9 py-2"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
