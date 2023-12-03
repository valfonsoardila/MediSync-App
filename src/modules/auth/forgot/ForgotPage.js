import React from "react";
import { resources } from "../../../assets/resources";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faCheck, faExclamation } from "@fortawesome/free-solid-svg-icons";
import { Toaster, toast } from "sonner";
import { resetRequest } from "../../../api/auth";
import "./ForgotPage.css";

const ForgotPage = ({ onComponentChange }) => {
  const handleBackClick = () => {
    onComponentChange("login");
  };

  const handleRest = () => {
    const email = document.getElementById("email").value;
    if (email === "") {
      toast.error("No se pudo restablecer", {
        description: "Debe completar Introductir un email",
        icon: (
          <FontAwesomeIcon
            icon={faExclamation}
            style={{ color: "red", fontSize: "20px", fontWeight: "600" }}
          />
        ),
      });
    } else {
      resetRequest(email).then((response) => {
        if (response.status === 200) {
          toast.success("Restablecido correctamente", {
            description: "Se ha enviado un correo a su email",
            icon: (
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "green", fontSize: "20px", fontWeight: "600" }}
              />
            ),
          });
          onComponentChange("login");
        } else {
          toast.error("No se pudo restablecer", {
            description: "No se pudo restablecer la contraseña",
            icon: (
              <FontAwesomeIcon
                icon={faExclamation}
                style={{ color: "red", fontSize: "20px", fontWeight: "600" }}
              />
            ),
          });
        }
      }).catch((error) => {
        console.log(error.message);
        if (error.message === "Network Error") {
          // Manejar caso de error del servidor
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
          toast.error("No se pudo restablecer", {
            description: "No se pudo restablecer la contraseña",
            icon: (
              <FontAwesomeIcon
                icon={faExclamation}
                style={{ color: "red", fontSize: "20px", fontWeight: "600" }}
              />
            ),
          });
        }
      });
    }
  };

  return (
    <>
      <div className="back-arrow">
        <FontAwesomeIcon icon={faArrowLeft} onClick={handleBackClick} />
      </div>
      <div className="form-container">
        <div className="form-header">
          <h3>Did you forget your password?</h3>
        </div>
        <div className="form-paragraph">
          <p>
            If you have forgotten your password, please enter your email address
            to send you an access recovery link.
          </p>
        </div>
        <div className="form-body">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <Toaster expand={true} richColors />
            <button className="btn btn-primary" onClick={handleRest}>
              Forgot
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPage;
