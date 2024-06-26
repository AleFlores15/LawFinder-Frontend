import React from 'react';
import '../styles/Role.css';
import { Link } from 'react-router-dom';
import useConfirmationStore from '../store/confirmationStore';
const Role = () => {
  const {setRole} = useConfirmationStore();

  const handleRole = (role) => {
  
    setRole(role);
    console.log(role);
  };
  return (
    <>
    
    <div className="role-selection">
      <h1 className="role-title">Law Finder</h1>
      <h2 className="role-subtitle">Registro de Nuevo Usuario</h2>
      <p className="role-text">¿Qué tipo de usuario desea crear?</p>
      <div className="button-group">
        <div className="button-wrapper">

          {/* Redirecciona a confirmation */}
          <Link to="/RegisterUser" onClick={() => {handleRole('customer')}}>
          <div className="role-button-container">
            <button className="role-button">
              <i className="fas fa-user"></i>
            </button>
          </div>
          </Link>
          <p className="role-label">Cliente</p>
          <p className="role-description">Usuario individual que busca asesoramiento legal.</p>
        </div>
        
        <div className="button-wrapper">
        <Link to="/LawyerRegistration" onClick={() => {handleRole('lawyer')}}>
          <div className="role-button-container">
            <button className="role-button">
              <i className="fas fa-gavel"></i>
            </button>
            
          </div>
          </Link>
         
          <p className="role-label">Abogado</p>
          <p className="role-description">Profesional legal que ofrece servicios de asesoramiento y representación.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Role;
