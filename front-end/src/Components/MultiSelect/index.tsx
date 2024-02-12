import { useContext } from 'react';
import { Context } from '../../Context';
import styled from 'styled-components';
import TitleAndDescription from '../TitleAndDescription';
import Select from 'react-select';

interface MultiSelectProps {
  is_dark_theme: boolean;
  name: string;
  title: string;
  description: string;
  showDescription: boolean;
  isDisabled: boolean;
  options: { value: string; label: string }[];
  selectedOptions: { value: string; label: string }[];
}


const Container = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  width: 100%;
  background-color: inherit;
`;

const StyledMultiSelect = styled(Select)<Omit<MultiSelectProps, 'title'|'description'|'showDescription'|'selected'|'name'|'options'|'selectedOptions' >>`
  width: 100%;
  font-size: 16px;
  text-align: start;
  border-radius: 5px;
  color: black;
  border: 1px solid ${(props) => (props.is_dark_theme ? 'white' : 'black')};
  .react-select__control {
    border: 1px solid ${(props) => (props.is_dark_theme ? 'white' : 'black')};
    background-color: ${(props) => (props.is_dark_theme ? '#242424' : 'white')};
  }
  .react-select__multi-value__label {
    color: ${(props) => (props.is_dark_theme ? 'white' : 'black')};
    background-color: ${(props) => (props.is_dark_theme ? '#242424' : 'white')};
  }
  .css-13cymwt-control{
    background-color: ${(props) => (props.is_dark_theme ? '#242424' : 'white')};
  }
  .react-select__indicator {
    color: ${(props) => (props.is_dark_theme ? 'white' : 'black')};
    background-color: ${(props) => (props.is_dark_theme ? '#242424' : 'white')};
  }
  
`;

function MultiSelectComponent({ is_dark_theme, name, isDisabled,description, showDescription, title,selectedOptions, options }: MultiSelectProps) {
  const { allContext, setAllContext } = useContext<any>(Context);

  const handleMultiSelectChange = (selectedValues: { value: string; label: string }[]) => {
    setAllContext({ ...allContext, form: { ...allContext.form, [name]: selectedValues } });
  };

  return (
    <Container>
        <TitleAndDescription 
            is_dark_theme={is_dark_theme} 
            name={title} 
            description={description} 
            showDescription={showDescription}
        >
          <StyledMultiSelect
            is_dark_theme={is_dark_theme}
            name={name}
            isDisabled={isDisabled}
            options={options}
            value={selectedOptions}
            onChange={(selectedValues) => handleMultiSelectChange(selectedValues as any)}
            isMulti
          />
        </TitleAndDescription>
    </Container>
  );
}

export default MultiSelectComponent;
