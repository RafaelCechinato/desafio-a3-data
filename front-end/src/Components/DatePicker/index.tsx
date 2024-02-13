import { useContext } from 'react';
import { Context } from '../../Context';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import TitleAndDescription from '../TitleAndDescription';
import DatePicker from 'react-datepicker';

interface DatePickerProps {
  is_dark_theme: boolean;
  name: string;
  title: string;
  description: string;
  showDescription: boolean;
  disabled: boolean;
  selected: any;
  defaultDate?: Date;
  dateFormat: string;
}

const Container = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  width: 100%;
  background-color: inherit;
`;

const StyledDatePicker = styled(DatePicker)<Omit<DatePickerProps,'title'|'description' | 'showDescription' | 'selected' | 'name' | 'dateFormat'>>`
  width: 92%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.is_dark_theme ? 'white' : 'black')};
  background-color: ${(props) => (props.is_dark_theme ? '#242424' : 'white')};
  color: ${(props) => (props.is_dark_theme ? 'white' : 'black')};
  ${(props) =>
    props.disabled
      ? `
        background-color: lightgray;
      `
      : ''}
`;

function DatePickerComponent({ is_dark_theme, name, defaultDate,description, showDescription, selected, disabled, dateFormat,title }: DatePickerProps) {
  const { allContext, setAllContext } = useContext<any>(Context);

  function onHandleChange(date: Date | null) {
    setAllContext({ ...allContext, form: { ...allContext.form, [name]: date } });
  }

  return (
    <Container>
        <TitleAndDescription 
            is_dark_theme={is_dark_theme} 
            name={title} 
            description={description} 
            showDescription={showDescription}
        >
            <StyledDatePicker
                selected={selected}
                onChange={onHandleChange}
                placeholderText="Selecione a data"
                defaultDate={defaultDate}
                dateFormat={dateFormat}
                is_dark_theme={is_dark_theme}
                disabled={disabled}
            />
        </TitleAndDescription>
    </Container>
  );
}

export default DatePickerComponent;
