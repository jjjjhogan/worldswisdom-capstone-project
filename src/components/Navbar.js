import Dropdown from "./Dropdown";
import logo from "./logo1.png";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("userData"));
    if (data) {
      setUserData(data);
    }
  }, []);

  const handleLogout = () => {
    setUserData(null);
    sessionStorage.removeItem("userData");
    window.location.reload();
  }

  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <a
          className="navbar-brand align-text-bottom"
          href={`${process.env.PUBLIC_URL}/`}
        >
          <img
            src= {logo}
            alt=""
            width="60"
            className="d-inline-block align-top"
          />{" "}
          WorldsWisdom
        </a>

        <nav className="nav-item">
          <form className="d-flex">
            <input className="form-control me-sm-2" type="search" placeholder="Search"/>
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>

        <nav className="nav-item">
          {userData ?
          (
            <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
          ) : (
            <a href="/login" className="btn btn-primary">Login</a>
          )}
          
        </nav>

        <nav className="nav-item">
          <Dropdown/>
        </nav>
      </div>
    </nav>
  );
}
