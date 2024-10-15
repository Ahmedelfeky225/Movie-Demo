import { Link } from 'react-router-dom'; // استيراد Link من react-router-dom

export function NavBar() {
  return (
    <nav className="navbar navbar-expand-md box-shadow position-fixed" style={{ left: "0", top: "0", right: "0", zIndex: "88888888", background: "rgb(76, 15, 189)" }}>
      <div className="container-fluid">
        <Link className="navbar-brand text-white fs-3 custome-simple-logo" to="/" style={{ marginRight: "auto" }}>
          Filmac
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 align-items-center p-md-0 cutsome-toggle flex-column-sm" style={{ borderRadius: "4px", background: "#0a0a33", fontSize: '18px' }}>
            <li className="nav-item links-nav active fs-5 navigate-custome-style ml-10">
              <Link className="nav-link text-white text-start" to="/Filmac"><i className="bi bi-house-door fs-25"></i></Link>
            </li>
            <li className="nav-item links-nav navigate-custome-style">
              <Link className="nav-link text-white fs-20 text-start" to="/series">Series</Link>
            </li>
            <li className="nav-item links-nav navigate-custome-style">
              <Link className="nav-link text-white fs-20 text-start" to="/cartoon">Cartoon</Link>
            </li>
            <li className="nav-item links-nav navigate-custome-style">
              <Link className="nav-link text-white fs-20 text-start" to="/action">Action</Link>
            </li>
            <li className="nav-item links-nav navigate-custome-style">
              <Link className="nav-link text-white fs-20 text-start" to="/comedy">Comedy</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
