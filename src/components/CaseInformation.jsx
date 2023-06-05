import { useCasesStore } from '../store/casesStore';
import  {useParams} from 'react-router-dom';
import {useCaseDetailsStore } from '../store/caseDetailsStore';
import { useEffect } from 'react';
const CaseInformation = () => {
   const { id } = useParams();
  const { cases } = useCasesStore();
  const { getCaseDetails,caseDetails } = useCaseDetailsStore();
const legalCase = cases.find((legalCase) => legalCase.idLegalCase == id);

   useEffect(() => {
       getCaseDetails(id);
   }, [getCaseDetails, id]);


  if (!legalCase) {
    return <p>Caso no encontrado {id}</p>;
  }

  return (
    <div className="legal-case-details">
      <div className="card">
        <h2 className="card-title">Caso #{id}</h2>
        <h3 className="card-subtitle">{legalCase.title}</h3>
        <p className="card-description">{legalCase.summary}</p>
      </div>
      <div className="expediente">
        <h4 className="expediente-title">Expediente</h4>
        <p className="expediente-content">{caseDetails}</p>
      </div>
    </div>
  );
};

export default CaseInformation;