// SidebarRight.jsx
import React from 'react';
import './SidebarRight.css'; // قم بإنشاء ملف CSS الخاص بك

import './style.css'
export function SidebarRight() {
  return (
    <div className=" custom-sideBar-big box-shadoww rounded-1  sidebar fixed-position static-position-top" style={{right:"20px",backgroundColor: "#fff" ,overflow:"hidden"}}>
      <ul className="nav nav-pills sidebar-nav ">
        <li className="nav-item px-1 px-lg-2 py-2" style={{ borderBottom: "1px solid #eee", cursor: "pointer" }}>
          <a href="/" className="nav-link text-end" style={{ color: "#4c0fbd" }}>
            <span className="mx-2">Filmac</span>
            <img src="/film-clapperboard (1).png" style={{ width: "20px" }} alt="" />
          </a>
        </li>
        <li className="nav-item px-1 px-lg-2 py-2" style={{ borderBottom: "1px solid #eee", cursor: "pointer" }}>
          <a href="#most-watched" className="nav-link text-end" style={{ color: "#4c0fbd" }}>
            <span className="mx-2">Action</span>
            <img src="/action-movie.png" style={{ width: "20px" }} alt="" />
          </a>
        </li>
        <li className="nav-item px-1 px-lg-2 py-2" style={{ borderBottom: "1px solid #eee", cursor: "pointer" }}>
          <a href="#movies" className="nav-link text-end" style={{ color: "#4c0fbd" }}>
            <span className="mx-2">Anime Movies</span>
            <img src="/Anime.png" style={{ width: "20px" }} alt="" />
          </a>
        </li>
        <li className="nav-item px-1 px-lg-2 py-2" style={{ borderBottom: "1px solid #eee", cursor: "pointer" }}>
          <a href="#series" className="nav-link text-end" style={{ color: "#4c0fbd" }}>
            <span className="mx-2">Comedy</span>
            <img src="/film.png" style={{ width: "20px" }} alt="" />
          </a>
        </li>
        <li className="nav-item px-1 px-lg-2 py-2" style={{ borderBottom: "1px solid #eee", cursor: "pointer" }}>
          <a href="#ramadan-series" className="nav-link text-end" style={{ color: "#4c0fbd" }}>
            <span className="mx-2">Romance</span>
            <img src="/love-letter.png" style={{ width: "20px" }} alt="" />
          </a>
        </li>
        <li className="nav-item px-1 px-lg-2 py-2" style={{ borderBottom: "1px solid #eee", cursor: "pointer" }}>
          <a href="#anime-series" className="nav-link text-end" style={{ color: "#4c0fbd" }}>
            <span className="mx-2">Adventure</span>
            <img src="/adventure.png" style={{ width: "20px" }} alt="" />
          </a>
        </li>
        <li className="nav-item px-1 px-lg-2  pt-2 pb-3" style={{ cursor: "pointer" }}>
          <a href="#anime-movies" className="nav-link text-end" style={{ color: "#4c0fbd" }}>
            <span className="mx-2">Historical</span>
            <img src="/king.png" style={{ width: "20px" }} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
}
