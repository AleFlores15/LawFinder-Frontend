// src/ClassificationForm.js
import React, { useState } from 'react';
import './ClassificationForm.css';
import { useClassificationFormStore } from './classificationFormStore';
const ClassificationForm = () => {
  const [classification, setClassification] = useState({
    confidencialidad: {
      bajo: false,
      medio: false,
      alto: false,
    },
    integridad: {
      bajo: false,
      medio: false,
      alto: false,
    },
    disponibilidad: {
      bajo: false,
      medio: false,
      alto: false,
    },
  });

  const {isFinished, isPrivacyChecked, setPrivacyChecked, setConfidentialityValue, 
   setIntegrityValue, setAvailabilityValue,submitClassification, classificationForm, setPrivacyValue, style} =
   useClassificationFormStore();

  const handleChange = (category, event) => {
    const { name, value, checked} = event.target;
    console.log(value);
    if (category === 'confidencialidad') {
      setConfidentialityValue(value);
    }
    else if (category === 'integridad') {
      setIntegrityValue(value);
    }
      else if (category === 'disponibilidad') {
      setAvailabilityValue(value);
      }
      if(category === 'privacidad'){
         setPrivacyValue(value);
      }
    setClassification((prev) => ({
      ...prev,
      [category]: { ...prev[category], [name]: checked },
    }));
  };


   const handlePrivacy = (event, isPrivacyChecked) => {
      const {  value } = event.target;
      setPrivacyChecked(!isPrivacyChecked);
   };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Clasificación: ${JSON.stringify(classification)}`);
    submitClassification();
  };

  return (
    <div className="classification-form">
      <h1>Clasificación de activos de información</h1>
      <h2>
        Confidencialidad
        
      </h2>
      <div className="checkbox-group">
        <label>
          <input
            type="checkbox"
            name="bajo"
            checked={classification.confidencialidad.bajo}
            value={10}
            onChange={(e) => handleChange('confidencialidad', e)}
          />
          Bajo (10) {' '} 
          <p>Esta información, si fuera conocida por individuos no autorizados o hecha pública, no causaría un daño significativo a la organización. Es información que puede ser compartida abiertamente sin repercusiones adversas.</p>
        </label>
        <label>
          <input
            type="checkbox"
            name="medio"
            checked={classification.confidencialidad.medio}
            value={20}
            onChange={(e) => handleChange('confidencialidad', e)}
          />
          Medio (20) {' '}
          <p>La divulgación de esta información a personas no autorizadas podría afectar ciertos procesos críticos, ocasionar problemas legales menores, o provocar inconvenientes financieros y organizacionales limitados. Requiere protección adecuada pero no estricta.</p>
        </label>
        <label>
          <input
            type="checkbox"
            name="alto"
            checked={classification.confidencialidad.alto}
            value={30}
            onChange={(e) => handleChange('confidencialidad', e)}
          />
          Alto (30) {' '}
          <p>La exposición de esta información podría causar una afectación severa a procesos críticos, implicaciones legales significativas, grandes pérdidas financieras, y daños graves a la estructura organizacional. Es vital proteger esta información con las más altas medidas de seguridad.</p>
        </label>
      </div>
      <h2>Integridad</h2>
      <div className="checkbox-group">
        <label >
          <input
            type="checkbox"
            name="bajo"
            checked={classification.integridad.bajo}
            value={10}
            onChange={(e) => handleChange('integridad', e)}
          />                                 
          Bajo (10) 
          <p>La alteración, actualización o modificación de esta información, ya sea intencional o accidentalmente, no causaría un daño significativo a la organización. Los procesos críticos, las finanzas y la estructura organizacional no se verían afectados de manera importante.</p>
        </label>
        <label>
          <input
            type="checkbox"
            name="medio"
            checked={classification.integridad.medio}
            value={20}
            onChange={(e) => handleChange('integridad', e)}
          />
          Medio (20)
          <p> La modificación inadecuada de esta información podría afectar ciertos procesos críticos, causar problemas legales menores, o provocar inconvenientes financieros y organizacionales limitados. Se requiere un control adecuado pero no estricto para prevenir cambios no autorizados.</p>
        </label>
        <label>
          <input
            type="checkbox"
            name="alto"
            checked={classification.integridad.alto}
            value={30}
            onChange={(e) => handleChange('integridad', e)}
          />
          Alto (30)
          <p>La alteración indebida de esta información podría causar una afectación severa a procesos críticos, tener implicaciones legales significativas, grandes pérdidas financieras, y daños graves a la estructura organizacional. Es crucial proteger esta información contra cualquier modificación no autorizada.</p>
        </label>
      </div>



      <h2>Disponibilidad</h2>
      <div className="checkbox-group">
        <label>
          <input
            type="checkbox"
            name="bajo"
            checked={classification.disponibilidad.bajo}
            value={10}
            onChange={(e) => handleChange('disponibilidad', e)}
          />
          Bajo (10)
          <p>La indisponibilidad de esta información, ya sea permanente o por un periodo considerable de tiempo, no causaría un daño significativo a la organización. Los procesos críticos, las finanzas y la estructura organizacional no se verían afectados de manera importante.</p>
        </label>
        <label>
          <input
            type="checkbox"
            name="medio"
            checked={classification.disponibilidad.medio}
            value={20}
            onChange={(e) => handleChange('disponibilidad', e)}
          />
          Medio (20)
          <p>La falta de disponibilidad de esta información podría afectar ciertos procesos críticos, causar problemas legales menores, o provocar inconvenientes financieros y organizacionales limitados. Requiere medidas adecuadas para garantizar su disponibilidad, aunque no estrictas.</p>
        </label>
        <label>
          <input
            type="checkbox"
            name="alto"
            checked={classification.disponibilidad.alto}
            value={30}
            onChange={(e) => handleChange('disponibilidad', e)}
          />
          Alto (30)
          <p>La indisponibilidad de esta información podría causar una afectación severa a procesos críticos, tener implicaciones legales significativas, grandes pérdidas financieras, y daños graves a la estructura organizacional. Es crucial garantizar que esta información esté siempre disponible.</p>
        </label>
         <label>
            <input
               type="checkbox"
               name="privacidad"
               checked={isPrivacyChecked}
               onChange={(e) => handlePrivacy(e, isPrivacyChecked)}
            />
            Además de los anteriormente mencionados, esta información requiere protección especial por su naturaleza privada.
         </label>

         

         
         


      </div>
      {isPrivacyChecked && (
  <div>
    <h2>Privacidad</h2>
    <div className="checkbox-group">
      <label>
        <input
          type="checkbox"
          name="bajo"
          value={1}
          onChange={(e) => handleChange('privacidad', e)}
        />
        Bajo (1)
        <p>
          La indisponibilidad de esta información, ya sea permanente o por un
          periodo considerable de tiempo, no causaría un daño significativo a la
          organización. Los procesos críticos, las finanzas y la estructura
          organizacional no se verían afectados de manera importante.
        </p>
      </label>
      <label>
        <input
          type="checkbox"
          name="medio"
          value={5}
          onChange={(e) => handleChange('privacidad', e)}
        />
        Medio (5)
        <p>
          La falta de disponibilidad de esta información podría afectar ciertos
          procesos críticos, causar problemas legales menores, o provocar
          inconvenientes financieros y organizacionales limitados. Requiere
          medidas adecuadas para garantizar su disponibilidad, aunque no
          estrictas.
        </p>
      </label>
      <label>
        <input
          type="checkbox"
          name="alto"
          value={10}
          onChange={(e) => handleChange('privacidad', e)}
        />
        Alto (10)
        <p>
          La falta de disponibilidad de esta información tendría un impacto
          significativo en la organización, afectando gravemente los procesos
          críticos, causando problemas legales importantes y provocando
          pérdidas financieras significativas.
        </p>
      </label>
    </div>
  </div>
)}

      <button onClick={handleSubmit}>Enviar</button>
      {isFinished && (
            <p style={{color: style.color}}>
               Clasificación: {classificationForm}
            </p>
         )}
    </div>
  );
};

export default ClassificationForm;
