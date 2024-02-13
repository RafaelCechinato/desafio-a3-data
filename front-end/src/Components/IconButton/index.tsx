import { ReactNode } from 'react';
import styled from 'styled-components';


interface ButtonProps {
    is_dark_theme: boolean;
    children: ReactNode;
    onClick: () => void;
    className?: string;
}

const Button = styled.button<ButtonProps>`
    width: 40px;
    height: 40px;
    font-size: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 1px solid transparent;
    color: ${(props) => (props.is_dark_theme ? 'white' : 'black')};
    ${(props) => (props.className ? props.className : '')}
`;


function IconButton({is_dark_theme,onClick,children,className}:ButtonProps) {

  return (
    <Button is_dark_theme={is_dark_theme} onClick={onClick} className={className}>
      {children}
    </Button>
  )
}

export default IconButton
