import React from "react";
import { resources } from "../../../assets/resources";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { signupRequest } from "../../../api/auth";
import { faCheck, faExclamation } from "@fortawesome/free-solid-svg-icons";
import { Toaster, toast } from "sonner";
import "./RegisterPage.css";

const RegisterPage = ({ onComponentChange }) => {
  const handleBackClick = () => {
    onComponentChange("login");
  };

  const handleRegister = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if(name === "" || email === "" || password === "" || confirmPassword === ""){
      toast.error("No se pudo registrar", {
        description: "Debe completar todos los campos",
        icon: (
          <FontAwesomeIcon
            icon={faExclamation}
            style={{ color: "red", fontSize: "20px", fontWeight: "600" }}
          />
        ),
      });
    }else if (password !== confirmPassword) {
      toast.error("No se pudo registrar", {
        description: "Las contraseñas no coinciden",
        icon: (
          <FontAwesomeIcon
            icon={faExclamation}
            style={{ color: "red", fontSize: "20px", fontWeight: "600" }}
          />
        ),
      });
    } else {
      signupRequest(name, email, password)
        .then((response) => {
          console.log(response);
          toast.success("Registrado correctamente", {
            description: "Por favor inicie sesión",
            icon: (
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "green", fontSize: "20px", fontWeight: "600" }}
              />
            ),
          });
          onComponentChange("login");
        })
        .catch((error) => {
          console.log(error);
          toast.error("No se pudo registrar", {
            description: "Email ya registrado",
            icon: (
              <FontAwesomeIcon
                icon={faExclamation}
                style={{ color: "red", fontSize: "20px", fontWeight: "600" }}
              />
            ),
        });
      });
    }
  };

  return (
    <>
      <div className="back-arrow">
        <FontAwesomeIcon icon={faArrowLeft} onClick={handleBackClick} />
      </div>
      <div className="user-image">
        <img src={resources.user} alt="user" />
      </div>
      <div className="form-container">
        <div className="form-header">
          <h3>Register</h3>
        </div>
        <div className="form-body">
          <div className="form-group">
            <label htmlFor="name">Introduce your name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
            />
          </div>
          <div className="form-group">
            <Toaster expand={true} richColors  />
            <button className="btn btn-primary" onClick={handleRegister}>Register</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
