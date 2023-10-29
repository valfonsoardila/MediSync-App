import React, { useState } from "react";
import "./LayoutManagePatient.css";
import { resources } from "../../assets/resources";
import { motion } from "framer-motion";
import SchedulingPage from "../../modules/managepatient/scheduling/SchedulingPage";
import DiagnosticPage from "../../modules/managepatient/diagnostic/DiagnosticPage";

const LayoutPatient = () => {
  const [activeComponent, setActiveComponent] = useState("");
  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

  return (
    <div
      className="maincontainer"
      style={{ backgroundImage: `url(${resources.bgScheduling})` }}
    >
      <div className="blur-main">
        <motion.div
          className="container-manage-patient"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {activeComponent === "" && (
            <div className="container-manage-patient__content">
              <div className="container-manage-patient__content__title">
                <h1>Gestion paciente</h1>
              </div>
              <div className="container-manage-patient__content__buttons">
                <div className="container-manage-patient__content__buttons__scheduling">
                  <button
                    onClick={() => handleComponentChange("scheduling")}
                    id="agendar"
                  >
                    <img src={resources.scheduling} alt="agendar" />
                    <span>Agendar cita</span>
                  </button>
                </div>
                <div className="container-manage-patient__content__buttons__diagnostic">
                  <button
                    onClick={() => handleComponentChange("diagnostic")}
                    id="diagnosticar"
                  >
                    <img src={resources.diagnostic} alt="diagnosticar" />
                    <span>Diagnóstico personal</span>
                  </button>
                </div>
              </div>
            </div>
          )}
          {activeComponent === "scheduling" && (
            <SchedulingPage onComponentChange={handleComponentChange} />
          )}
          {activeComponent === "diagnostic" && (
            <DiagnosticPage onComponentChange={handleComponentChange} />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default LayoutPatient;
