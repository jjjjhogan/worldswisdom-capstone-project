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
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{" "}
          WorldsWisdom
        </a>
          <nav>
            <Dropdown/>
          </nav>
      </div>
    </nav>
  );
}
