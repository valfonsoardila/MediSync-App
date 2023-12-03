import React, { useState } from "react";
import "./SchedulingPage.css";
import { resources } from "../../../assets/resources";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faExclamation } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Toaster, toast } from "sonner";
import { getDoctors } from "../../../api/doctor";

const FormScheduling = () => {
  const [selectedDocType, setSelectedDocType] = useState("TI");
  const [selectedRegime, setSelectedRegime] = useState("Contributivo");
  const [selectedIps, setSelectedIps] = useState("Sura");
  const [selectedHorary, setSelectedHorary] = useState("8 a.m");
  const [selectedEspecialista, setSelectedEspecialista] = useState("Especialista");

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
    }).catch((error) => {
      if (error.message === "Network Error") {
        // Manejar caso de error del servidor
        setSelectedEspecialista("Error del servidor");
        toast.error("Error del servidor", {
          description: "Por favor, intenta nuevamente más tarde",
          icon: (
            <FontAwesomeIcon
              icon={faExclamation}
              style={{ color: "red", fontSize: "20px", fontWeight: "600" }}
            />
          ),
        });
      } else {
        // Manejar caso de error de autenticación
        setSelectedEspecialista("No hay especialistas");
        toast.error("No se pudo cargar especialistas", {
          description: "No hay medicos disponibles",
          icon: (
            <FontAwesomeIcon
              icon={faExclamation}
              style={{ color: "red", fontSize: "20px", fontWeight: "600" }}
            />
          ),

        });
      }
    });
  };

  const handleSchedule = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const companion = document.getElementById("companion").value;
    const id = document.getElementById("id").value;
    const address = document.getElementById("address").value;
    const date = document.getElementById("date").value;
    const docType = selectedDocType;
    const regime = selectedRegime;
    const eps = selectedIps;
    const horary = selectedHorary;
    const especialista = selectedEspecialista;

    const data = {
      name,
      email,
      phone,
      companion,
      id,
      address,
      date,
      docType,
      regime,
      eps,
      horary,
      especialista,
    };

    if (name === "" || email === "" || phone === "" || companion === "" || id === "" || address === "" || date === "" || docType === "" || regime === "" || eps === "" || horary === "" || especialista === "") {
      toast.error("Error al agendar cita", {
        description: "Por favor, llena todos los campos",
        icon: (
          <FontAwesomeIcon
            icon={faExclamation}
            style={{ color: "red", fontSize: "20px", fontWeight: "600" }}
          />
        ),
      });
    } else {
      toast.success("Cita agendada", {
        description: "La cita ha sido agendada exitosamente",
        icon: (
          <FontAwesomeIcon
            icon={faCheck}
            style={{ color: "green", fontSize: "20px", fontWeight: "600" }}
          />
        ),
      });
      console.log(data);
    }
  };
  const handleChangeDocType = (event) => {
    const select = event.target;
    const option = select.options[select.selectedIndex];
    setSelectedDocType(option.value);
  };
  const handleChangeEspecialista = (event) => {
    const select = event.target;
    const option = select.options[select.selectedIndex];
    setSelectedEspecialista(option.value);
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
                      value={selectedEspecialista}
                      onChange={handleChangeEspecialista}
                    >
                      <option value={selectedEspecialista}>
                        {selectedEspecialista}
                      </option>
                      {especialistas.map((doctor, index) => (
                        <option key={index} value={doctor}>
                          {doctor}
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
            <Toaster richColors />
            <button onClick={handleSchedule}>Agendar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormScheduling;
