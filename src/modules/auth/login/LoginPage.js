import React, { useState } from "react";
import { resources } from "../../../assets/resources";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
// import ApiGoogle from "./APIs/ApiGoogle";
// import Toast from "../../../components/utils/toast/Toast";
import { signinRequest } from "../../../api/auth";
import { Toaster, toast } from "sonner";
import { faCheck, faExclamation } from "@fortawesome/free-solid-svg-icons";
import "./LoginPage.css";

const LoginPage = ({ onComponentChange }) => {
  const handleRegisterClick = () => {
    onComponentChange("register");
  };

  const handleForgotClick = () => {
    onComponentChange("forgot");
  };

  const handleLogin = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email === "" || password === "") {
      toast.error("No se pudo autenticar", {
        description: "Email o contraseña incorrectos",
        icon: (
          <FontAwesomeIcon
            icon={faExclamation}
            style={{ color: "red", fontSize: "20px", fontWeight: "600" }}
          />
        ),
      });
    } else {
      signinRequest(email, password)
        .then((response) => {
          console.log(response);
          window.location.href = "/dashboard";
          toast.success("Autenticado correctamente", {
            description: "Bienvenido",
            icon: (
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "green", fontSize: "20px", fontWeight: "600" }}
              />
            ),
          });
        })
        .catch((error) => {
          console.error(error);
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
            console.log(error);
            toast.error("No se pudo autenticar", {
              description: "Email o contraseña incorrectos",
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
      <div className="logocontainer">
        <img src={resources.logo} alt="logo" />
        <span className="logotext">MediSync</span>
        <span className="logintext">Login</span>
      </div>
      <div className="formcontainer">
        <div className="form">
          <div className="form-group">
            <label htmlFor="email">
              <FontAwesomeIcon icon={faEnvelope} />
              Email
            </label>
            <input type="email" id="email" name="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <FontAwesomeIcon icon={faKey} />
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <span className="forgotpassword" onClick={handleForgotClick}>
              Forgot password?
            </span>
          </div>
          <div className="form-group">
            <Toaster expand={true} richColors />
            <button type="submit" className="btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
        <div className="form-footer">
          <span className="form-footer-text">
            Don't have an account?{" "}
            <span onClick={handleRegisterClick}>Sign up</span>
          </span>
          <div className="form-footer-divider" />
          <div className="form-footer-google">{/* <ApiGoogle /> */}</div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
