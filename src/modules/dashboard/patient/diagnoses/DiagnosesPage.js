import React from 'react';
import { motion } from "framer-motion";
import './DiagnosesPage.css';

const DiagnosesPage = () => {
  return (
    <motion.div className="container-diagnoses" initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}>
      <div className="container-diagnoses__header">
        <h1>Diagnósticos medicos</h1>
      </div>
      <div className="container-diagnoses__body">
        
      </div>
    </motion.div>
  )
}

export default DiagnosesPage