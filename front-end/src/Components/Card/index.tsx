import { useContext, ReactNode } from 'react'
import { Context } from '../../Context'
import styled from 'styled-components';
import IconButton from '../IconButton';

interface CardProps {
    is_dark_theme: boolean;
    children: ReactNode;
}

interface HeaderProps{
    children: ReactNode;
}

const Container = styled.div<CardProps>`
  width: 30%;
  margin: auto;
  padding: 5px;
  border-radius: 10px;
  background-color: ${(props) => (props.is_dark_theme ? '#242424' : 'white')};
  border: 1px solid white;

  @media (max-width: 920px) {
    width: 100%;
  }
`;

const Header = styled.div<HeaderProps>`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;



function Card({children}:CardProps) {
  const { allContext, setAllContext } = useContext<any>(Context);

  return (
    <Container is_dark_theme={allContext.is_dark_theme}>
        <Header>
            <IconButton onClick={() => setAllContext({...allContext,is_dark_theme:!allContext.is_dark_theme})} is_dark_theme={allContext.is_dark_theme} />
        </Header>
        {children}
    </Container>
  )
}

export default Card
