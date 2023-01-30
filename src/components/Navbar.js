export default function NavBar({
  settingsBtnIconClassName = "",
  handleSettingsBtnOnClick,
}) {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <a
          className="navbar-brand align-text-bottom"
          href={`${process.env.PUBLIC_URL}/`}
        >
          <img
            src="/images/logo/logo.png"
            alt=""
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          WorldsWisdom
        </a>
          <nav>
            <button className="btn btn-primary" onClick={handleSettingsBtnOnClick}>
              <i className="bi bi-gear" />
            </button>
          </nav>
      </div>
    </nav>
  );
}
