import React from 'react';
import { NavLink } from 'react-router-dom';
import './SidebarRight.css';
import './style.css';
import { MdStarRate } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";

import { MdUpdate } from "react-icons/md";


export function SidebarRight() {
  return (
    <div className="custom-sideBar-big box-shadoww rounded-1 sidebar fixed-position static-position-top" style={{ right: "20px", background: "rgb(237 229 229)", overflow: "hidden" }}>
  <ul className="nav nav-pills sidebar-nav">
    <li className="nav-item px-1 px-lg-2 py-2"  style={{ borderBottom: "1px solid #eee", cursor: "pointer" }}>
      <NavLink
        to="/"
        className={({ isActive }) => 
          `nav-link text-end ${isActive ? "active" : ""}`}
        >
        <span className="mx-2">Filmac</span>
        <img src="/film-clapperboard (1).png" style={{ width: "20px" }} alt="" />
      </NavLink>
    </li>

    <li className="nav-item px-1 px-lg-2 py-2" style={{ borderBottom: "1px solid #eee", cursor: "pointer" }}>
      <NavLink
        to="/action"
        className={({ isActive }) => 
          `nav-link text-end ${isActive ? "active" : ""}`}
      >
        <span className="mx-2">Action Movies</span>
        <img src="/action-movie.png" style={{ width: "20px" }} alt="" />
      </NavLink>
    </li>

    <li className="nav-item px-1 px-lg-2 py-2" style={{ borderBottom: "1px solid #eee", cursor: "pointer" }}>
      <NavLink
        to="/drama"
        className={({ isActive }) => 
          `nav-link text-end ${isActive ? "active" : ""}`}
      >
        <span className="mx-2">Drama Movies</span>
        <img src="/drama.png" style={{ width: "20px" ,borderRadius:"10px"}} alt="" />
      </NavLink>
    </li>

    <li className="nav-item px-1 px-lg-2 py-2" style={{ borderBottom: "1px solid #eee", cursor: "pointer" }}>
      <NavLink
        to="/anime"
        className={({ isActive }) => 
          `nav-link text-end ${isActive ? "active" : ""}`}
      >
        <span className="mx-2">Anime Movies</span>
        <img src="/Anime.png" style={{ width: "20px" }} alt="" />
      </NavLink>
    </li>

    <li className="nav-item px-1 px-lg-2 py-2" style={{ borderBottom: "1px solid #eee", cursor: "pointer" }}>
      <NavLink
        to="/comdey"
        className={({ isActive }) => 
          `nav-link text-end ${isActive ? "active" : ""}`}
      >
        <span className="mx-2">Comedy Movies</span>
        <img src="/film.png" style={{ width: "20px" }} alt="" />
      </NavLink>
    </li>

    <li className="nav-item px-1 px-lg-2 py-2" style={{ borderBottom: "1px solid #eee", cursor: "pointer" }}>
      <NavLink
        to="/romance"
        className={({ isActive }) => 
          `nav-link text-end ${isActive ? "active" : ""}`}
      >
        <span className="mx-2">Romance Movies</span>
        <img src="/love-letter.png" style={{ width: "20px" }} alt="" />
      </NavLink>
    </li>

    <li className="nav-item px-1 px-lg-2 py-2" style={{ borderBottom: "1px solid #eee", cursor: "pointer" }}>
      <NavLink
        to="/adventure"
        className={({ isActive }) => 
          `nav-link text-end ${isActive ? "active" : ""}`}
      >
        <span className="mx-2">Adventure Movies</span>
        <img src="/adventure.png" style={{ width: "20px" }} alt="" />
      </NavLink>
    </li>

    <li className="nav-item px-1 px-lg-2 pt-2 pb-3" style={{ cursor: "pointer" }}>
      <NavLink
        to="/thriller"
        className={({ isActive }) => 
          `nav-link text-end ${isActive ? "active" : ""}`}
      >
        <span className="mx-2">Thriller Movies</span>
        <img src="/king.png" style={{ width: "20px" }} alt="" />
      </NavLink>
    </li>
    <div style={{height:"20px",backgroundColor:"#0a0a33"}} />
    
    <li className="nav-item px-1 px-lg-2 pt-2 pb-3" style={{ cursor: "pointer" }}>
      <NavLink
        to="/mostrated"
        className={({ isActive }) => 
          `nav-link text-end ${isActive ? "active" : ""}`}
      >
        <span className="mx-2">Most Rated</span>
        {/* <img src="/king.png" style={{ width: "20px" }} alt="" /> */}
        <MdStarRate style={{color:"yellow",width:"40px",height:"25px"}}/>
      </NavLink>
    </li>
    <li className="nav-item px-1 px-lg-2 pt-2 pb-3" style={{ cursor: "pointer" }}>
      <NavLink
        to="/mostviewed"
        className={({ isActive }) => 
          `nav-link text-end ${isActive ? "active" : ""}`}
      >
        <span className="mx-2">Most viewed</span>
        <IoEyeSharp style={{color:"#aaaaaa",width:"40px",height:"25px"}}/>
      </NavLink>
    </li>
    <li className="nav-item px-1 px-lg-2 pt-2 pb-3" style={{ cursor: "pointer" }}>
      <NavLink
        to="/recentlyadded"
        className={({ isActive }) => 
          `nav-link text-end ${isActive ? "active" : ""}`}
      >
        <span className="mx-2">Recently Added</span>
        <MdUpdate style={{color:"#000",width:"40px",height:"25px"}}/>
      </NavLink>
    </li>
  </ul>
</div>

  );
}
