import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarRight.css';
import './style.css';

export function SidebarRight() {
  return (
    <div className="custom-sideBar-big box-shadoww rounded-1 sidebar fixed-position static-position-top" style={{right:"20px", background:"rgb(237 229 229)", overflow:"hidden"}}>
      <ul className="nav nav-pills sidebar-nav">
        <li className="nav-item px-1 px-lg-2 py-2" style={{ borderBottom: "1px solid #eee", cursor: "pointer" }}>
          <Link to="/Filmac" className="nav-link text-end" style={{ color: "#4c0fbd" }}>
            <span className="mx-2">Filmac</span>
            <img src="/film-clapperboard (1).png" style={{ width: "20px" }} alt="" />
          </Link>
        </li>
        <li className="nav-item px-1 px-lg-2 py-2" style={{ borderBottom: "1px solid #eee", cursor: "pointer" }}>
          <Link to="/action" className="nav-link text-end" style={{ color: "#4c0fbd" }}>
            <span className="mx-2">Action</span>
            <img src="/action-movie.png" style={{ width: "20px" }} alt="" />
          </Link>
        </li>
        <li className="nav-item px-1 px-lg-2 py-2" style={{ borderBottom: "1px solid #eee", cursor: "pointer" }}>
          <Link to="/anime" className="nav-link text-end" style={{ color: "#4c0fbd" }}>
            <span className="mx-2">Anime Movies</span>
            <img src="/Anime.png" style={{ width: "20px" }} alt="" />
          </Link>
        </li>
        <li className="nav-item px-1 px-lg-2 py-2" style={{ borderBottom: "1px solid #eee", cursor: "pointer" }}>
          <Link to="/comedy" className="nav-link text-end" style={{ color: "#4c0fbd" }}>
            <span className="mx-2">Comedy</span>
            <img src="/film.png" style={{ width: "20px" }} alt="" />
          </Link>
        </li>
        <li className="nav-item px-1 px-lg-2 py-2" style={{ borderBottom: "1px solid #eee", cursor: "pointer" }}>
          <Link to="/romance" className="nav-link text-end" style={{ color: "#4c0fbd" }}>
            <span className="mx-2">Romance</span>
            <img src="/love-letter.png" style={{ width: "20px" }} alt="" />
          </Link>
        </li>
        <li className="nav-item px-1 px-lg-2 py-2" style={{ borderBottom: "1px solid #eee", cursor: "pointer" }}>
          <Link to="/adventure?page=8" className="nav-link text-end" style={{ color: "#4c0fbd" }}>
            <span className="mx-2">Adventure</span>
            <img src="/adventure.png" style={{ width: "20px" }} alt="" />
          </Link>
        </li>
        <li className="nav-item px-1 px-lg-2  pt-2 pb-3" style={{ cursor: "pointer" }}>
          <Link to="/thriller" className="nav-link text-end" style={{ color: "#4c0fbd" }}>
            <span className="mx-2">Thriller Movies</span>
            <img src="/king.png" style={{ width: "20px" }} alt="" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
