import React from "react";
import './LayoutScheduling.css';
import { resources } from "../../assets/resources";
import { motion } from "framer-motion";

const LayoutScheduling = () => {
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
          
        </motion.div>
      </div>
    </div>
  )
}

export default LayoutScheduling
