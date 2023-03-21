import Dropdown from "./Dropdown";
import logo from "./logo1_notext.png";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("userData") || null);
    if (data) {
      setUserData(data);
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid nav-fill w-100">
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
          <form className="d-flex" action="/searchQuestion">
          <div className="w-100 d-inline-block">
            <input className="form-control me-sm-2" name="search" type="text" placeholder="Search"/>
            </div>
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>

        <nav className="nav-item">
          {userData ?
          (
            <div>
            <nav className="nav-item">
            <Dropdown userData ={userData} setUserData={setUserData}/>
            </nav>
            </div>
          ) : (
            <a href="/login" className="btn btn-primary">Login</a>
          )}
          
        </nav>

{/*        <nav className="nav-item">
          <Dropdown/>
        </nav>*/}
      </div>
    </nav>
  );
}
