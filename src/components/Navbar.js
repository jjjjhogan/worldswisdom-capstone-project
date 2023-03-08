import Dropdown from "./Dropdown";
import logo from "./logo1.png"

export default function NavBar() {
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
        <button type="button" className="btn btn-primary">Login</button>
        </nav>
        <nav className="nav-item">
        <form className="d-flex">
        <input className="form-control me-sm-2" type="search" placeholder="Search"/>
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
        </nav>
          <nav className="nav-item">
            <Dropdown/>
          </nav>
      </div>
    </nav>
  );
}
