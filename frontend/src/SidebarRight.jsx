import React from 'react';
import { NavLink } from 'react-router-dom';
import './SidebarRight.css';
import './style.css';

export function SidebarRight() {
  return (
    //   <ul className="nav nav-pills sidebar-nav">
    //     <li className="nav-item px-1 px-lg-2 py-2" style={{ borderBottom: "1px solid #eee", cursor: "pointer" }}>
    //       <Link to="/Filmac" className="nav-link text-end" style={{ color: "#4c0fbd" }}>
    //         <span className="mx-2">Filmac</span>
    //         <img src="/film-clapperboard (1).png" style={{ width: "20px" }} alt="" />
    //       </Link>
    //     </li>
    //     <li className="nav-item px-1 px-lg-2 py-2" style={{ borderBottom: "1px solid #eee", cursor: "pointer" }}>
    //       <Link to="/action" className="nav-link text-end" style={{ color: "#4c0fbd" }}>
    //         <span className="mx-2">Action</span>
    //         <img src="/action-movie.png" style={{ width: "20px" }} alt="" />
    //       </Link>
    //     </li>
    //     <li className="nav-item px-1 px-lg-2 py-2" style={{ borderBottom: "1px solid #eee", cursor: "pointer" }}>
    //       <Link to="/anime" className="nav-link text-end" style={{ color: "#4c0fbd" }}>
    //         <span className="mx-2">Anime Movies</span>
    //         <img src="/Anime.png" style={{ width: "20px" }} alt="" />
    //       </Link>
    //     </li>
    //     <li className="nav-item px-1 px-lg-2 py-2" style={{ borderBottom: "1px solid #eee", cursor: "pointer" }}>
    //       <Link to="/comedy" className="nav-link text-end" style={{ color: "#4c0fbd" }}>
    //         <span className="mx-2">Comedy</span>
    //         <img src="/film.png" style={{ width: "20px" }} alt="" />
    //       </Link>
    //     </li>
    //     <li className="nav-item px-1 px-lg-2 py-2" style={{ borderBottom: "1px solid #eee", cursor: "pointer" }}>
    //       <Link to="/romance" className="nav-link text-end" style={{ color: "#4c0fbd" }}>
    //         <span className="mx-2">Romance</span>
    //         <img src="/love-letter.png" style={{ width: "20px" }} alt="" />
    //       </Link>
    //     </li>
    //     <li className="nav-item px-1 px-lg-2 py-2" style={{ borderBottom: "1px solid #eee", cursor: "pointer" }}>
    //       <Link to="/adventure?page=8" className="nav-link text-end" style={{ color: "#4c0fbd" }}>
    //         <span className="mx-2">Adventure</span>
    //         <img src="/adventure.png" style={{ width: "20px" }} alt="" />
    //       </Link>
    //     </li>
    //     <li className="nav-item px-1 px-lg-2  pt-2 pb-3" style={{ cursor: "pointer" }}>
    //       <Link to="/thriller" className="nav-link text-end" style={{ color: "#4c0fbd" }}>
    //         <span className="mx-2">Thriller Movies</span>
    //         <img src="/king.png" style={{ width: "20px" }} alt="" />
    //       </Link>
    //     </li>
    //   </ul>
    // </div>
    <div className="custom-sideBar-big box-shadoww rounded-1 sidebar fixed-position static-position-top" style={{ right: "20px", background: "rgb(237 229 229)", overflow: "hidden" }}>
  <ul className="nav nav-pills sidebar-nav">
    <li className="nav-item px-1 px-lg-2 py-2"  style={{ borderBottom: "1px solid #eee", cursor: "pointer" }}>
      <NavLink
        to="/"
        className="nav-link text-end"
        // style={{ color: "#4c0fbd" }}
        activeClassName="active" // سيتم تطبيق هذا الـ CSS عند النقر
      >
<<<<<<< HEAD
        <span className="mx-2">Filmac</span>
=======
        <span className="mx-2">Filmac Home</span>
>>>>>>> 2102966eb7478d8c5548581d89f6fa65bfe99382
        <img src="/film-clapperboard (1).png" style={{ width: "20px" }} alt="" />
      </NavLink>
    </li>

    <li className="nav-item px-1 px-lg-2 py-2" style={{ borderBottom: "1px solid #eee", cursor: "pointer" }}>
      <NavLink
        to="/action"
        className="nav-link text-end"
        // style={{ color: "#4c0fbd" }}
        activeClassName="active"
      >
        <span className="mx-2">Action Movies</span>
        <img src="/action-movie.png" style={{ width: "20px" }} alt="" />
      </NavLink>
    </li>

    <li className="nav-item px-1 px-lg-2 py-2" style={{ borderBottom: "1px solid #eee", cursor: "pointer" }}>
      <NavLink
        to="/drama"
        className="nav-link text-end"
        // style={{ color: "#4c0fbd" }}
        activeClassName="active"
      >
        <span className="mx-2">Drama Movies</span>
        <img src="/drama.png" style={{ width: "20px" ,borderRadius:"10px"}} alt="" />
      </NavLink>
    </li>

    <li className="nav-item px-1 px-lg-2 py-2" style={{ borderBottom: "1px solid #eee", cursor: "pointer" }}>
      <NavLink
        to="/anime"
        className="nav-link text-end"
        // style={{ color: "#4c0fbd" }}
        activeClassName="active"
      >
        <span className="mx-2">Anime Movies</span>
        <img src="/Anime.png" style={{ width: "20px" }} alt="" />
      </NavLink>
    </li>

    <li className="nav-item px-1 px-lg-2 py-2" style={{ borderBottom: "1px solid #eee", cursor: "pointer" }}>
      <NavLink
        to="/comdey"
        className="nav-link text-end"
        // style={{ color: "#4c0fbd" }}
        activeClassName="active"
      >
        <span className="mx-2">Comedy Movies</span>
        <img src="/film.png" style={{ width: "20px" }} alt="" />
      </NavLink>
    </li>

    <li className="nav-item px-1 px-lg-2 py-2" style={{ borderBottom: "1px solid #eee", cursor: "pointer" }}>
      <NavLink
        to="/romance"
        className="nav-link text-end"
        // style={{ color: "#4c0fbd" }}
        activeClassName="active"
      >
        <span className="mx-2">Romance Movies</span>
        <img src="/love-letter.png" style={{ width: "20px" }} alt="" />
      </NavLink>
    </li>

    <li className="nav-item px-1 px-lg-2 py-2" style={{ borderBottom: "1px solid #eee", cursor: "pointer" }}>
      <NavLink
        to="/adventure"
        className="nav-link text-end"
        // style={{ color: "#4c0fbd" }}
        activeClassName="active"
      >
        <span className="mx-2">Adventure Movies</span>
        <img src="/adventure.png" style={{ width: "20px" }} alt="" />
      </NavLink>
    </li>

    <li className="nav-item px-1 px-lg-2 pt-2 pb-3" style={{ cursor: "pointer" }}>
      <NavLink
        to="/thriller"
        className="nav-link text-end"
        // style={{ color: "#4c0fbd" }}
        activeClassName="active"
      >
        <span className="mx-2">Thriller Movies</span>
        <img src="/king.png" style={{ width: "20px" }} alt="" />
      </NavLink>
    </li>
  </ul>
</div>

  );
}
