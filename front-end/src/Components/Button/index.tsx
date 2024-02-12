import { ReactNode } from 'react'
import styled from 'styled-components';

interface ButtonProps {
  children: ReactNode;
  disabled: boolean;
  type: string;
}

const Container = styled.div`
  display: flex;
  align-item:center;
  justify-content:center;
  width: 100%;
  background-color: inherit;
`;

const Button = styled.button<ButtonProps>`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  margin-top: 25px;
  width: 40%;
  height: 40px;
  border-radius: 5px;
  padding-inline: 5px;
  background-color: #0d6efd;
  border: 1px solid transparent;
  ${(props) => (props.disabled?
    `background-color: lightgray;
      color: gray;
    `
    :""
  )}
`;

function ButtonComponent({disabled,children,type}: ButtonProps) {


  return (
    <Container>
        <Button 
            type={type} 
            disabled={disabled}
        >
            {children}
        </Button>
    </Container>
  )
}

export default ButtonComponent
