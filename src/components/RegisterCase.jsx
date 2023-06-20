import { useNavigate } from 'react-router-dom';
import { useCaseStore } from '../store/caseRegistrationStore';
import { useEffect } from 'react';

const RegisterCase = () => {
  const history = useNavigate();
  const navigate = useNavigate();
  
  const 
  { formData, departamentos,
    provincias, handleChange,
    handleInvitation, loadDepartamentos,
    loadProvincias, instancias,
    loadInstancias, categorias,
    loadCategorias, loadSubCategorias,
    subCategorias, crimes,
    loadCrimes, registerCase,
    status, lawyerEmail } =
  useCaseStore((state) => ({
    ...state,
    history: history,
  }));


  useEffect(() => {
    loadDepartamentos();
    loadCategorias();
    loadInstancias();
  }, [loadCategorias, loadDepartamentos, loadInstancias]);

  const handleDepartamentoChange =  (event) =>  {
    const idDepartamento = event.target.value;
    handleChange('departamentId', event);
    loadProvincias(idDepartamento);
  };

  const handleCategoriaChange = (event) => {
    const idCategoria = event.target.value;
    handleChange("categoria", event);
    loadSubCategorias(idCategoria);
  };

  const handleSubCategoriaChange = (event) => {
    const idSubCategoria = event.target.value;
    handleChange('subCategoryId', event);
    loadCrimes(idSubCategoria);
  };
  const handleSubmitForm = async (event) => {
    event.preventDefault();
    await registerCase(event);
  };

  const handleLawyerEmail = (event) => {
    //const lawyerEmail = event.target.value;
    handleChange('lawyerEmail', event);
  }
  const handleCustomerEmail = (event) => {
    handleChange('customerEmail', event);
  }
  const handleIsComplainant = (event) => {
    handleChange('complainant', event);
  }

 

  return (
    <>
      <h1 className='centered-apple-font'>REGISTRO DE CASO</h1>
      <form className="form-container" onSubmit={handleSubmitForm}>
        <div className="form-row">
          <label>Título *</label>
          <input name="title" type="text" value={formData.title} onChange={(event) => handleChange('title', event)}  />
        </div>
        <div className="form-row">
          <label>Fecha de inicio *</label>
          <input name="startDate" type="date" value={formData.startDate} onChange={(event) => handleChange('startDate', event)}  />
        </div>
        <div className="form-row">
          <label>Resumen *</label>
          <textarea name="summary" value={formData.summary} onChange={(event) => handleChange('summary', event)}  />
        </div>
        <div className="form-row">
          <label>Departamento*</label>
          <select name="departamento" onChange={(event) => handleDepartamentoChange(event)} >
            {departamentos.map((departamento) => (
              <option key={departamento.idDepartment} value={departamento.idDepartment}>
                {decodeURIComponent(departamento.departmentName)}
              </option>
            ))}
          </select>
        </div>
        <div className="form-row">
          <label>Provincia*</label>
          <select name="provincia" onChange={(event) => handleIsComplainant(event)} >
            {provincias.map((provincia) => (
              <option key={provincia.idProvince} value={provincia.idProvince}>
                {decodeURIComponent(provincia.provinceName)}
              </option>
            ))}
          </select>
        </div>
        <div className="form-row">
          <label>Categoría *</label>
          <select name="categoria" onChange={(event) => handleCategoriaChange(event)}>
            {categorias.map((categoria) => (
                <option key={categoria.categoryId} value={categoria.categoryId}>
                  {decodeURIComponent(categoria.categoryName)}
                </option>
              ))
            }
          </select>
        </div>
        <div className="form-row">
          <label>Sub-categoría *</label>
          <select name="subCategoria" onChange={(event) => handleSubCategoriaChange(event)} >
            {subCategorias.map((subCategoria) => (
                <option key={subCategoria.idSubCategory} value={subCategoria.idSubCategory}>
                  {decodeURIComponent(subCategoria.subCategoryName)}
                </option>
              ))
            }
          </select>
        </div>
        {<div className="form-row">
          <label>Delito *</label>
          <select name="delito" onChange={(event) => handleChange('crimeId', event)} >
            {crimes.map((crime) => (
                <option key={crime.crimeId} value={crime.crimeId}>
                  {decodeURIComponent(crime.name)}
                </option>
              ))
            }
          </select>
        </div> }
        <div className="form-row">
          <label>Demandante (Si está marcado es demandante, caso contrario es demandado)</label>
          <input name="complainant" type="checkbox" onChange={(event) => handleChange('complainant', event)}  />
        </div>
        <hr />
        <h2>Actores</h2>
        <div className="form-row">
          <label>Invitar abogado *</label>
          <input name="laywerEmail" type="text" onChange={(event) => handleLawyerEmail(event)}/>
          <button type="button" onClick={() => handleInvitation("lawyer")}>Enviar invitación</button>
          {status === 'lawyerNotFound' && <p>Abogado no registrado</p>}
          {status === 'lawyerFound' && <p>Invitación enviada a {formData.lawyerEmail} </p>}
        </div>
        <div className="form-row">
          <label>Invitar cliente *</label>
          <input name="customerEmail" type="text" onChange={(event) => handleCustomerEmail(event)} />
          <button type="button" onClick={() => {handleInvitation("customer")}}>Enviar invitación</button>
          {status === 'customerNotFound' && <p>Cliente no registrado</p>}
          {status === 'customerFound' && <p>Invitación enviada a {formData.lawyerEmail} </p>}
        </div>
        
        <hr />
        <div className="form-row">
          <label>Contraparte *</label>
          <input name="counterpart" type="text" onChange={(event) => handleChange('counterpart', event)} />
        </div>
        <h2>Etapa actual del proceso</h2>
        <div className="form-row">
          <label>Instancia *</label>
          <select name="instancia" onChange={(event) => handleChange('idInstance', event)} >
            {instancias.map((instancia) => (
                <option key={instancia.instanceId} value={instancia.instanceId}>
                  {decodeURIComponent(instancia.instanceName)}
                </option>
              ))
            }
          </select>
        </div>
        <div className="form-row">
          <label>Fecha de inicio de la instancia *</label>
          <input name="fechaInicioInstancia" type="date" onChange={(event) => handleChange('startDateInstance', event)}  />
        </div>
        <div className="form-row">
          <label>Fecha final de plazo de la instancia *</label>
          <input name="fechaFinalInstancia" type="date" onChange={(event) => handleChange('endDateInstance', event)}  />
        </div>
        <div className="button-row">
          <button className="register-button" onClick={()=> {navigate("/Home")}}>Cancelar</button>
          <button type="submit" className="register-button">Registrar</button>
          
        </div>
      </form>
    </>
  );
};

export default RegisterCase;
