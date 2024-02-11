import { useContext, useEffect } from 'react'
import { Context } from '../Context'
import './style.css'
import styled from 'styled-components';

interface FormProps {
  dark?: boolean;
}

const FormContainer = styled.form<FormProps>`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: auto;
  background-color: ${(props) => (props.dark ? '#242424' : 'white')}
  border: 1px solid white;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 12px;
  width: 100%;
`;

function Form() {
  const {allContext,setAllContext} = useContext<any>(Context);

  useEffect(() => {
    console.log(allContext);
    setAllContext({...allContext,formulario:{"nome":"A"}})
  },[])
  

  return (
    <FormContainer onSubmit={() => {}}>
      <Input type="text" placeholder="Name" />
    </FormContainer>
  )
}

export default Form
