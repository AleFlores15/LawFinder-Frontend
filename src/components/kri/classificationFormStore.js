import { create } from 'zustand';

export const useClassificationFormStore = create((set, get) => ({

   isFinished : false,
   setStage : (stage) => set({stage}),
   isPrivacyChecked : false,
   confidentialityValue : 0,
   integrityValue : 0,
   availabilityValue : 0,
   classificationForm : '',
   privacyValue : 0,
   style: {
      display: 'none',
   },

   setPrivacyChecked : (isPrivacyChecked) => set({isPrivacyChecked}),
   getStage : () => get().stage,
   setConfidentialityValue : (confidentialityValue) => set({confidentialityValue}),
   setIntegrityValue : (integrityValue) => set({integrityValue}),
   setAvailabilityValue : (availabilityValue) => set({availabilityValue}),
   setPrivacyValue : (privacyValue) => set({privacyValue}),
   submitClassification : () => {
      set({isFinished : true});
      if(!get().isPrivacyChecked){
         const totalResult = parseInt(get().confidentialityValue) 
         + parseInt(get().integrityValue)
         + parseInt(get().availabilityValue);
         
         const classification = totalResult <= 40 ? 'USO PÚBLICO O GENERAL' : totalResult <= 60 ? 'USO INTERNO O PRIVADO' : 'CRÍTICO O CONFIDENCIAL';
         const style = {
            color: totalResult <= 40 ? 'green' : totalResult <= 60 ? 'orange' : 'red',
         }
         console.log(totalResult)
         set({classificationForm : classification});
      }
      else if(get().isPrivacyChecked){
         const totalResult = parseInt(get().confidentialityValue) 
         + parseInt(get().integrityValue)
         + parseInt(get().availabilityValue)
         + parseInt(get().privacyValue);
         
         const classification = totalResult <= 40 ? 'USO PÚBLICO O GENERAL' : totalResult <= 60 ? 'USO INTERNO O PRIVADO' : 'CRÍTICO O CONFIDENCIAL';
         const style = {
            color: totalResult <= 40 ? 'green' : totalResult <= 60 ? 'orange' : 'red',
         }
         set({style : style});
         console.log(totalResult)
         set({classificationForm : classification});
      }
      

      
   },

}));