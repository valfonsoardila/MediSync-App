import React, { useState } from "react";
import { resources } from "../../../assets/resources";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faBoxOpen,
  faCog,
  faDashboard,
  faDoorOpen,
  faLayerGroup,
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
    window.location.href = "/authentication";
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
        <img src={resources.logo} alt="logo" />
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
        <div className="sidebar-menu-item">
          <FontAwesomeIcon icon={faDashboard} onClick={handleDashboardClick} />
          <span
            style={{ display: hover ? "flex" : "none" }}
            onClick={handleDashboardClick}
          >
            Dashboard
          </span>
        </div>
        <div className="collapsible-item" onClick={toggleExpandedData}>
          <div className="collapsible-header">
            <FontAwesomeIcon icon={faLayerGroup} />
            <span style={{ display: hover ? "flex" : "none" }}>
              Nuevo diseño
            </span>
          </div>
          {expandedData &&
            hover &&
            (console.log("expandedData", expandedData),
            (
              <div className="collapsible-body">
                <div className="collapsible-body-item">
                  <FontAwesomeIcon icon={faBox} />
                  <span style={{ display: hover ? "flex" : "none" }}>
                    Formulario
                  </span>
                </div>
                <div className="collapsible-body-item">
                  <FontAwesomeIcon icon={faBoxOpen} />
                  <span style={{ display: hover ? "flex" : "none" }}>
                    Hoja de vida
                  </span>
                </div>
              </div>
            ))}
        </div>
        <div className="sidebar-menu-item">
          <FontAwesomeIcon icon={faBoxOpen} />
          <span style={{ display: hover ? "flex" : "none" }}>
            Mis plantillas
          </span>
        </div>
        <div className="sidebar-menu-item">
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
