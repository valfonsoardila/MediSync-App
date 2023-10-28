import React, { useState } from "react";
import "./LayoutScheduling.css";
import { resources } from "../../assets/resources";
import { motion } from "framer-motion";

const LayoutScheduling = () => {
  const [selectedDocType, setSelectedDocType] = useState("TI");
  const [selectedRegime, setSelectedRegime] = useState("Contributivo");
  const [selectedIps, setSelectedIps] = useState("Sura");

  const docType = ["TI", "CC", "CE", "Pasaporte"];
  const regime = ["Contributivo", "Subsidiado", "Particular", "Otro"];
  const ips = ["Sura", "Coomeva", "Salud Total", "Sanitas", "Nueva EPS", ];

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
  
  const handleChangeIps = (event) => {
    const select = event.target;
    const option = select.options[select.selectedIndex];
    setSelectedIps(option.value);
  };

  return (
    <div
      className="maincontainer"
      style={{ backgroundImage: `url(${resources.bgScheduling})` }}
    >
      <div className="blur-main">
        <motion.div
          className="container-schedul"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="form-scheduling">
            <div className="form-scheduling-header">
              <div className="form-scheduling-header-silhouette">
                <img src={resources.silhouette} alt="silueta" />
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
                        <label>IPS de Afiliacion: </label>
                        <select
                          value={selectedIps}
                          onChange={handleChangeIps}
                        >
                          <option value="IPS" disabled hidden>
                            IPS
                          </option>
                          {ips.map((ips, index) => (
                            <option key={index} value={ips}>
                              {ips}
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
                        name="name"
                        id="name"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LayoutScheduling;
