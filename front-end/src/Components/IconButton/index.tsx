import styled from 'styled-components';
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

interface ButtonProps {
    is_dark_theme: boolean;
    onClick: () => void;
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
    color: ${(props) => (props.is_dark_theme ? 'white' : 'black')}
`;


function IconButton({is_dark_theme,onClick}:ButtonProps) {

  return (
    <Button is_dark_theme={is_dark_theme} onClick={onClick}>
        {is_dark_theme? <CiDark />:<CiLight />}
    </Button>
  )
}

export default IconButton
