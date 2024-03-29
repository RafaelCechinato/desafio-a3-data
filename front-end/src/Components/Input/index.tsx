import { ChangeEvent, useContext } from 'react'
import { Context } from '../../Context'
import styled from 'styled-components';
import TitleAndDescription from '../TitleAndDescription';

interface InputProps {
  is_dark_theme: boolean;
  name: string;
  type: string;
  title: string;
  placeholder: string;
  description: string;
  showDescription: boolean;
  disabled: boolean;
  value: any;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 100%;
  background-color: inherit;
`;

const Input = styled.input<Omit<InputProps,'title' | 'description' | 'showDescription'>>`
  display: flex;
  flex-direction: column;
  width: 96%;
  height: 40px;
  border-radius: 5px;
  padding-inline: 5px;
  outline: none;
  color: ${(props) => (props.is_dark_theme ? 'white' : '#242424')};
  background-color: ${(props) => (props.is_dark_theme ? '#242424' : 'white')};
  border: 1px solid ${(props) => (props.is_dark_theme ? 'white' : '#242424')};
  ${(props) => (props.disabled?
    `background-color: lightgray;
    `
    :""
  )}
`;

function InputComponent({is_dark_theme,type,name,placeholder,description,showDescription, value, disabled,title}: InputProps) {
  const {allContext,setAllContext} = useContext<any>(Context);

  function onHandleChange(e:ChangeEvent<HTMLInputElement>){
    setAllContext({...allContext, form:{...allContext.form, [name]:e.target.value}})
  }

  return (
    <Container>
        <TitleAndDescription
          is_dark_theme={is_dark_theme} 
          name={title}
          description={description}
          showDescription={showDescription}
        >
          <Input 
              is_dark_theme={is_dark_theme} 
              value={value} 
              name={name} 
              type={type} 
              placeholder={placeholder} 
              onChange={(e) => onHandleChange(e)} 
              disabled={disabled}
          />
        </TitleAndDescription>
    </Container>
  )
}

export default InputComponent
