import { FormEvent, useContext, useState } from 'react'
import { Context } from '../../Context'
import './style.css'
import styled from 'styled-components';
import InputComponent from '../Input/index.tsx';
import ButtonComponent from '../Button/index.tsx';
import {isObjectEmpty} from '../../Utils.jsx';
import DatePickerComponent from '../DatePicker/index.tsx';
import MultiSelectComponent from '../MultiSelect/index.tsx';
import TextAreaComponent from '../TextArea/index.tsx';

interface FormProps {
  is_dark_theme?: boolean;
}

interface FormType {
  room:any, // lista de salas
  procedures:any, // lista de procedimentos
  doctor:string, // Doutor
  pacient: string, // paciente
  hospital: any, // lista de hospitais
  dateSurgical:any, // data cirurgia
  observations: string // observações
}

const FormContainer = styled.form<FormProps>`
  display: flex;
  flex-direction: column;
  width: initial;
  padding: 15px;
  background-color: ${(props) => (props.is_dark_theme ? '#242424' : 'white')};
`;


function Form() {
  const {allContext} = useContext<any>(Context);
  const [loading, setLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState<FormType>({
    room:'', 
    procedures:'',
    doctor:'',
    pacient: '', 
    hospital: '',
    dateSurgical:'',
    observations: ''
  });

  const dictionary: FormType = {
    room:'Salas', 
    procedures:'Procedimentos',
    doctor:'Médico',
    pacient: 'Paciente', 
    hospital: 'Hospital',
    dateSurgical:'Data da cirurgia',
    observations: 'Observações'
  };

  function areAllFieldsFilled(): boolean {
    const errors: FormType = { 
      room:'', 
      procedures:'',
      doctor:'',
      pacient: '', 
      hospital: '',
      dateSurgical:'',
      observations: ''
    };
    let isValid = true;
  
    for (const [fieldName, fieldValue] of Object.entries(allContext.form)) {
      if (fieldName === 'room' || fieldName === 'procedures' || fieldName === 'hospital') {
        if (!Array.isArray(fieldValue) || fieldValue.length === 0) {
          errors[fieldName as keyof FormType] = `* O campo ${dictionary[fieldName as keyof FormType]} é obrigatório.`;
          isValid = false;
        } else {
          errors[fieldName as keyof FormType] = '';
        }
      }else if (typeof fieldValue === 'string' && fieldValue.trim() === '' && fieldName !== 'complement') {
        errors[fieldName as keyof FormType] = `* O campo ${dictionary[fieldName as keyof FormType]} é obrigatório.`;
        isValid = false;
      } else {
        if (!isObjectEmpty(errors)) {
          errors[fieldName as keyof FormType] = '';
        }
      }
    }
    
    setValidationErrors(errors);
    return isValid;
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (areAllFieldsFilled()) {
      console.log("OK")
    }
  };

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <FormContainer is_dark_theme={allContext.is_dark_theme} onSubmit={handleSubmit}>
      <MultiSelectComponent 
        is_dark_theme={allContext.is_dark_theme} 
        options={options}
        selectedOptions={allContext.form.room}
        name={"room"} 
        title={dictionary['room']}
        showDescription={validationErrors.room!==''?true:false}
        isDisabled={loading}
        description={validationErrors.room}
      />
      <MultiSelectComponent 
        is_dark_theme={allContext.is_dark_theme} 
        options={options}
        selectedOptions={allContext.form.procedures}
        name={"procedures"} 
        title={dictionary['procedures']}
        showDescription={validationErrors.procedures!==''?true:false}
        isDisabled={loading}
        description={validationErrors.procedures}
      />
      <InputComponent 
        is_dark_theme={allContext.is_dark_theme} 
        value={allContext.form.doctor}
        name={"doctor"} 
        title={dictionary['doctor']}
        type={"text"} 
        placeholder={"Escreva o nome do médico"} 
        showDescription={validationErrors.doctor!==''?true:false}
        disabled={loading}
        description={validationErrors.doctor}
      />
      <InputComponent 
        is_dark_theme={allContext.is_dark_theme} 
        value={allContext.form.pacient}
        name={"pacient"} 
        title={dictionary['pacient']}
        type={"text"} 
        placeholder={"Escreva o nome do paciente"} 
        showDescription={validationErrors.pacient!==''?true:false}
        disabled={loading}
        description={validationErrors.pacient}
      />
      <MultiSelectComponent 
        is_dark_theme={allContext.is_dark_theme} 
        options={options}
        selectedOptions={allContext.form.hospital}
        name={"hospital"} 
        title={dictionary['hospital']}
        showDescription={validationErrors.hospital!==''?true:false}
        isDisabled={loading}
        description={validationErrors.hospital}
      />
      <DatePickerComponent 
        is_dark_theme={allContext.is_dark_theme} 
        selected={allContext.form.dateSurgical}
        name={"dateSurgical"} 
        title={dictionary['dateSurgical']}
        dateFormat={"dd/MM/yyyy"}
        showDescription={validationErrors.dateSurgical!==''?true:false}
        disabled={loading}
        description={validationErrors.dateSurgical}
      />
      <TextAreaComponent 
        is_dark_theme={allContext.is_dark_theme} 
        value={allContext.form.observations}
        name={"observations"} 
        title={dictionary['observations']}
        type={"text"} 
        placeholder={"Escreva suas observasoes"} 
        showDescription={validationErrors.observations!==''?true:false}
        disabled={loading}
        description={validationErrors.observations}
      />
      <ButtonComponent
        disabled={loading}
        type="submit"
      >
        {`Enviar`}
      </ButtonComponent>
    </FormContainer>
  )
}

export default Form
