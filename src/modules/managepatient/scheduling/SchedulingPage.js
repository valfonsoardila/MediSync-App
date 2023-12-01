import React, { useState } from "react";
import "./SchedulingPage.css";
import { resources } from "../../../assets/resources";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { getDoctors } from "../../../api/doctor";

const FormScheduling = () => {
  const [selectedDocType, setSelectedDocType] = useState("TI");
  const [selectedRegime, setSelectedRegime] = useState("Contributivo");
  const [selectedIps, setSelectedIps] = useState("Sura");
  const [selectedHorary, setSelectedHorary] = useState("8 a.m");

  const docType = ["TI", "CC", "CE", "Pasaporte"];
  const regime = ["Contributivo", "Subsidiado", "Particular", "Otro"];
  const horary = ["8 a.m", "9 a.m", "10 a.m", "11 a.m", "12 p.m", "2 p.m"];
  const eps = [];
  const especialistas = [];

  const getEps = () => {
    const jsonEps = resources.eps;
    const epsArray = jsonEps.entidades.map((entidad) => entidad.entidad);
    epsArray.forEach((entidad) => {
      eps.push(entidad);
    });
  };

  const getEspecialistas = () => {
    getDoctors().then((response) => {
      const doctors = response.data;
      doctors.forEach((doctor) => {
        especialistas.push(doctor.name);
      });
    });
  }
  const handleChangeDocType = (event) => {
    const select = event.target;
    const option = select.options[select.selectedIndex];
    setSelectedDocType(option.value);
  };

  const handleChangeRegime = (event) => {
    const select = event.target;
    const option = select.options[select.selectedIndex];
    setSelectedRegime(option.value);
  };

  const handleChangeEPS = (event) => {
    const select = event.target;
    const option = select.options[select.selectedIndex];
    setSelectedIps(option.value);
  };

  const handleChangeHorary = (event) => {
    const select = event.target;
    const option = select.options[select.selectedIndex];
    setSelectedHorary(option.value);
  };
  const handleBack = () => {
    window.location.href = "/scheduling";
  };

  getEps();
  getEspecialistas();

  return (
    <div className="container-scheduling">
      <div className="form-scheduling">
        <div className="form-scheduling-header">
          <div className="form-scheduling-header-back" onClick={handleBack}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
          <div className="form-scheduling-header-silhouette">
            <img src={resources.scheduling} alt="silueta" />
          </div>
          <div className="form-scheduling-header-title">
            <h1>Agendar cita medica</h1>
          </div>
        </div>
        <div className="form-scheduling-body">
          <div className="form-scheduling-body-form">
            <div className="form-section-one">
              <div className="form-section-one-input">
                <div className="form-section-input">
                  <label htmlFor="name">Nombre del paciente: </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nombre del paciente"
                  />
                </div>
                <div className="form-section-collapsible">
                  <div className="collapsible-options">
                    <label>Tipo doc: </label>
                    <select
                      value={selectedDocType}
                      onChange={handleChangeDocType}
                    >
                      <option value="Docuemnto" disabled hidden>
                        Documento
                      </option>
                      {docType.map((doc, index) => (
                        <option key={index} value={doc}>
                          {doc}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-section-input">
                  <label htmlFor="name">Correo: </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Correo"
                  />
                </div>
                <div className="form-section-input">
                  <label htmlFor="name">Telefono: </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Telefono"
                  />
                </div>
                <div className="form-section-collapsible">
                  <div className="collapsible-options">
                    <label>EPS de Afiliacion: </label>
                    <select value={selectedIps} onChange={handleChangeEPS}>
                      <option value="EPS" disabled hidden>
                        EPS
                      </option>
                      {eps.map((eps, index) => (
                        <option key={index} value={eps}>
                          {eps}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-section-two">
              <div className="form-section-two-input">
                <div className="form-section-input">
                  <label htmlFor="name">Nombre del acompañante: </label>
                  <input
                    type="text"
                    name="companion"
                    id="companion"
                    placeholder="Nombre del acompañante"
                  />
                </div>
                <div className="form-section-input">
                  <label htmlFor="name">Numero de Id: </label>
                  <input
                    type="text"
                    name="id"
                    id="id"
                    placeholder="Numero de Id"
                  />
                </div>
                <div className="form-section-input">
                  <label htmlFor="name">Direccion de domicilio: </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Direccion"
                  />
                </div>
                <div className="form-section-collapsible">
                  <div className="collapsible-options">
                    <label>Régimen: </label>
                    <select
                      value={selectedRegime}
                      onChange={handleChangeRegime}
                    >
                      <option value="Regimen" disabled hidden>
                        Regimen
                      </option>
                      {regime.map((reg, index) => (
                        <option key={index} value={reg}>
                          {reg}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-section-collapsible">
                  <div className="collapsible-options">
                    <label>Especialista: </label>
                    <select
                      value={selectedRegime}
                      onChange={handleChangeRegime}
                    >
                      <option value="Especialista" disabled hidden>
                        Especialista
                      </option>
                      {especialistas.map((reg, index) => (
                        <option key={index} value={reg}>
                          {reg}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-scheduling-body-calendar">
            <div className="form-scheduling-body-calendar-title">
              <h3>Seleccione la fecha y hora de la cita</h3>
            </div>
            <div className="form-scheduling-body-calendar-content">
              <div className="form-scheduling-body-calendar-content-date">
                <div className="form-scheduling-body-calendar-content-date-title">
                  <h4>Fecha</h4>
                </div>
                <div className="form-scheduling-body-calendar-content-date-input">
                  <input type="date" name="date" id="date" />
                </div>
              </div>
              <div className="form-scheduling-body-calendar-content-horary">
                <div className="form-scheduling-body-calendar-content-horary-title">
                  <h4>Hora</h4>
                </div>
                <select value={selectedHorary} onChange={handleChangeHorary}>
                  <option value="Horario" disabled hidden>
                    Horario
                  </option>
                  {horary.map((hour, index) => (
                    <option key={index} value={hour}>
                      {hour}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="form-scheduling-body-button">
            <button>Agendar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormScheduling;
