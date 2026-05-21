import React, { useContext, useEffect, useState } from "react";
import LandingPage from "./component/LandingPage";
import Login from "./component/Auth/Login";
import Employeedashboard from "./component/Dashboard/Employeedashboard";
import Admindashboard from "./component/Dashboard/Admindashboard";
import { Authcontext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(Authcontext);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, []);

  useEffect(() => {
    if (!user) {
      setShowLogin(false);
    }
  }, [user]);

  const handleLogin = (email, password) => {
    if (email == "admin@company.com" && password == '123') {
      console.log("This is admin");
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: "admin" }))
    } else if (userData) {
      const employee = userData.employees.find((e) => email == e.email && password == e.password)
      if (employee) {
        console.log("This is user");
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: "employee", data: employee }))
      } else {
        alert("Invalid credentials");
      }
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <>
      {!user && !showLogin ? (
        <LandingPage onGetStarted={() => setShowLogin(true)} />
      ) : null}
      {!user && showLogin ? (
        <Login handleLogin={handleLogin} onBack={() => setShowLogin(false)} />
      ) : null}
      {user === 'admin' ? (
        <Admindashboard changeUser={setUser} />
      ) : user === 'employee' ? (
        <Employeedashboard changeUser={setUser} data={loggedInUserData} setUserData={setLoggedInUserData} />
      ) : null}
    </>
  );
};

export default App;