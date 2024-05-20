import React from "react";
import "../Css/ErrorComponent.css";

const ErrorComponent = () => {
  return (
    <div className="error-container">
      <div className="browser">
        <div className="controls">
          <i className="control-btn"></i>
          <i className="control-btn"></i>
          <i className="control-btn"></i>
        </div>
        <div className="eyes">
          <div className="eye"></div>
          <div className="eye"></div>
        </div>
        <div className="mouth">
          <div className="lips"></div>
          <div className="lips"></div>
          <div className="lips"></div>
          <div className="lips"></div>
          <div className="lips"></div>
          <div className="lips"></div>
          <div className="lips"></div>
          <div className="lips"></div>
        </div>
      </div>
      <h1 className="error-heading">Desafortunadamente, algo salió mal.</h1>
      <p className="error-message">
        Algo Salio Mal. Por favor refresque
        su navegador. Si el error continúa, comuníquese con nuestro equipo de
        soporte mediante el correo. 
        <a href="http://mcause.us/supportticket">IT TEAM</a>.
      </p>
    </div>
  );
};

export default ErrorComponent;
