import React from "react";
import "./DiagnosticPage.css";
import { resources } from "../../../assets/resources";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const DiagnosticPage = () => {
  const handleBack = () => {
    window.location.href = "/scheduling";
  };
  return (
    <div className="container-diagnostic">
      <div className="form-diagnostic">
        <div className="form-diagnostic-header">
          <div className="form-diagnostic-header-back" onClick={handleBack}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
          <div className="form-diagnostic-header-silhouette">
            <img src={resources.diagnostic} alt="silueta" />
          </div>
          <div className="form-diagnostic-header-title">
            <h1>Diagnostico médico</h1>
          </div>
        </div>
        <div className="form-diagnostic-body">
          <div className="form-diagnostic-body-input">
            <div className="form-diagnostic-body-search">
              <label htmlFor="id">Buscar por Id: </label>
              <input
                type="text"
                id="id"
                name="id"
                placeholder="Numero de identificacion"
              />
            </div>
            <div className="form-diagnostic-body-report"></div>
          </div>
          <div className="form-diagnostic-body-send-report">
            <div className="form-diagnostic-body-send-input">
              <label htmlFor="id">Enviar al correo: </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Correo electronico"
              />
            </div>
          </div>
          <div className="form-diagnostic-body-button">
            <button>Enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticPage;
