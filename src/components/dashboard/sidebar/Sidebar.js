import React, { useState } from "react";
import { resources } from "../../../assets/resources";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faCog,
  faDashboard,
  faDoorOpen,
  faHeartPulse,
  faStethoscope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

const Sidebar = ({ onComponentChange }) => {
  const [expandedData, setExpandedData] = useState(false);
  const [hover, setHover] = useState(false);

  const handleDashboardClick = () => {
    onComponentChange("dashboard");
    console.log("dashboard");
  };
  const handleProfileClick = () => {
    onComponentChange("profile");
    console.log("profile");
  };
  const handleOutSesionClick = () => {
    window.location.href = "/";
  };
  const changeHover = () => {
    setHover(!hover);
  };
  const toggleExpandedData = () => {
    setExpandedData(!expandedData);
    console.log(expandedData);
  };
  return (
    <div
      className="container-sidebar"
      onMouseEnter={changeHover}
      onMouseLeave={changeHover}
    >
      <div className="sidebar-logo" style={{ height: hover ? "0%" : "15%" }}>
        <div className="sidebar-logo-circle" style={{ display: hover ? "none" : "flex"}}>
          <img src={resources.logo} alt="logo" />
        </div>
        <h1 style={{ display: hover ? "none" : "block" }}>Dashboard</h1>
      </div>
      <div className="profile">
        <img src={resources.user} alt="profile" />
        <h1>Admin</h1>
      </div>
      <div className="sidebar-menu">
        <div className="sidebar-title">
          <span>Menu</span>
        </div>
        <div className="sidebar-menu-item" onClick={handleDashboardClick}>
          <FontAwesomeIcon icon={faDashboard} onClick={handleDashboardClick} />
          <span
            style={{ display: hover ? "flex" : "none" }}
            onClick={handleDashboardClick}
          >
            Dashboard
          </span>
        </div>
         <div className="sidebar-menu-item">
          <FontAwesomeIcon icon={faCalendar} />
          <span
            style={{ display: hover ? "flex" : "none" }}
            onClick={handleDashboardClick}
          >
            Citas agendadas
          </span>
        </div>
        <div className="collapsible-item" onClick={toggleExpandedData}>
          <div className="collapsible-header">
            <FontAwesomeIcon icon={faUser} />
            <span style={{ display: hover ? "flex" : "none" }}>
              Gestion pacientes
            </span>
          </div>
          {expandedData &&
            hover &&
            (console.log("expandedData", expandedData),
            (
              <div className="collapsible-body">
                <div className="collapsible-body-item">
                  <FontAwesomeIcon icon={faHeartPulse} />
                  <span style={{ display: hover ? "flex" : "none" }}>
                    Diagnostico
                  </span>
                </div>
                <div className="collapsible-body-item">
                  <FontAwesomeIcon icon={faStethoscope} />
                  <span style={{ display: hover ? "flex" : "none" }}>
                    Historial clinico
                  </span>
                </div>
              </div>
            ))}
        </div>
        <div className="sidebar-menu-item">
          <FontAwesomeIcon icon={faClock} />
          <span style={{ display: hover ? "flex" : "none" }}>
            Gestion horarios
          </span>
        </div>
        <div className="sidebar-menu-item" onClick={handleProfileClick}>
          <FontAwesomeIcon icon={faCog} onClick={handleProfileClick} />
          <span
            style={{ display: hover ? "flex" : "none" }}
            onClick={handleProfileClick}
          >
            Ajustes
          </span>
        </div>
      </div>
      <div className="sidebar-menu-sesion">
        <div
          className="sidebar-menu-item-sesion"
          onClick={handleOutSesionClick}
        >
          <FontAwesomeIcon icon={faDoorOpen} />
          <span style={{ display: hover ? "flex" : "none" }}>
            Cerrar Sesion
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
