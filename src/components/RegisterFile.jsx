import React, { useEffect } from 'react';
import useStore from '../store/fileRegistrationStore';
import '../styles/RegisterFile.css'; 

const RegisterFile = () => {
  const { 
    uploadFile, 
    loading, 
    message, 
    summary, 
    setSummary, 
    dueDate, 
    setDueDate, 
    setFile, 
    courts, 
    getCourts, 
    documentTypes, 
    getDocumentTypes, 
    selectedCourt, 
    setSelectedCourt, 
    selectedDocumentType, 
    setSelectedDocumentType 
  } = useStore();

  useEffect(() => {
    getCourts();
    getDocumentTypes();
  }, [getCourts, getDocumentTypes]);

  const onFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    uploadFile();
  }

  return (
    <form onSubmit={onSubmit} className='register-file-form'>
      <label>Corte:</label>
      <select onChange={(e) => setSelectedCourt(parseInt(e.target.value))} disabled={loading} value={selectedCourt}>
        {courts.map(court => <option key={court.idCourt} value={court.idCourt}>{court.courtName}</option>)}
      </select>
      <label>Tipo de documento:</label>
      <select onChange={(e) => setSelectedDocumentType(parseInt(e.target.value))} disabled={loading} value={selectedDocumentType}>
        {documentTypes.map(type => <option key={type.typeId} value={type.typeId}>{type.name}</option>)}
      </select>
      <input type="file" onChange={onFileChange} disabled={loading} />
      <input type="text" value={summary} onChange={(e) => setSummary(e.target.value)} placeholder="Resumen" disabled={loading}  />
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} disabled={loading}  />
      <button type="submit" disabled={loading} >Enviar</button>
      {loading ? <p>Cargando...</p> : <p>{message}</p>}
    </form>
  );
};

export default RegisterFile;