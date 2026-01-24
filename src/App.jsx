// import React from "react";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthProvider";
const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (authData) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if(loggedInUser){
        setUser(loggedInUser.role)
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    if (
      authData &&
      authData.employees.find((e) => email == e.email && e.password == password)
    ) {
      setUser("employee");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee" }),
      );
    } else if (
      authData &&
      authData.admin.find((e) => (email = e.email && password == e.password))
    ) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else {
      alert("INVALID CREDENTIALS");
    }
  };

  // handleLogin("admin.me@gmail.com", 123);

  const authData = useContext(AuthContext);

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "employee" ? <EmployeeDashboard /> : <AdminDashboard />}
    </>
  );
};
export default App;
