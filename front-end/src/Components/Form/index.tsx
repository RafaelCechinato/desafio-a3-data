import { useContext } from 'react'
import { Context } from '../../Context'
import './style.css'
import styled from 'styled-components';
import InputComponent from '../Input/index.tsx';

interface FormProps {
  is_dark_theme?: boolean;
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

  return (
    <FormContainer is_dark_theme={allContext.is_dark_theme} onSubmit={() => {}}>
      <InputComponent 
        is_dark_theme={allContext.is_dark_theme} 
        value={allContext.form.email}
        name={"email"} 
        type={"text"} 
        placeholder={"Escreva seu e-mail"} 
        showDescription={true}
        description="* E-mail é um campo obrigatório"
      />
    </FormContainer>
  )
}

export default Form
