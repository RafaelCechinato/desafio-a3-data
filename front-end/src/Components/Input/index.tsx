import { ChangeEvent, useContext } from 'react'
import { Context } from '../../Context'
import styled from 'styled-components';
import TitleAndDescription from '../TitleAndDescription';

interface InputProps {
  is_dark_theme: boolean;
  name: string;
  type: string;
  placeholder: string;
  description: string;
  showDescription: boolean;
  value: any;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: inherit;
`;

const Input = styled.input<Omit<InputProps, 'description' | 'showDescription'>>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40px;
  margin: auto;
  border-radius: 5px;
  padding-inline: 5px;
  color: ${(props) => (props.is_dark_theme ? 'white' : '#242424')};
  background-color: ${(props) => (props.is_dark_theme ? '#242424' : 'white')};
  border: 1px solid ${(props) => (props.is_dark_theme ? 'white' : '#242424')};
`;

function InputComponent({is_dark_theme,type,name,placeholder,description,showDescription, value}: InputProps) {
  const {allContext,setAllContext} = useContext<any>(Context);

  function onHandleChange(e:ChangeEvent<HTMLInputElement>){
    setAllContext({...allContext, form:{...allContext.form, [name]:e.target.value}})
  }

  return (
    <Container>
        <TitleAndDescription
          is_dark_theme={is_dark_theme} 
          name={name}
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
          />
        </TitleAndDescription>
    </Container>
  )
}

export default InputComponent
