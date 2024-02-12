import { ReactNode } from 'react'
import { capitalizeFirstLetter } from '../../Utils';
import styled from 'styled-components';
import LabelComponent from '../Label';

interface TitleAndDescriptionProps {
  is_dark_theme: boolean;
  name: string;
  description: string;
  showDescription: boolean;
  children: ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: inherit;
`;



function TitleAndDescription({is_dark_theme,children,name,description,showDescription}: TitleAndDescriptionProps) {
  return (
    <Container>
        <LabelComponent color={is_dark_theme?"white":"black"} size={"16px"}>
          {`${capitalizeFirstLetter(name)}:`} 
        </LabelComponent>
        {children}
        {showDescription?
            <LabelComponent color={'#dc3545'} size={"12px"}>
                {description}
            </LabelComponent>
            :
            ""    
        }
    </Container>
  )
}

export default TitleAndDescription
