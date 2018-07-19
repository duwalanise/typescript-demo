import {
  DatePicker,
  TextField
} from 'office-ui-fabric-react';
import Select from 'react-select';
import styled from 'styled-components';


export const FormWrapper = styled.div`
  flex: 1
  display: flex;
  flex-direction: column;
`;

export const FieldWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: solid 1px #ccc;
`;

export const StyledTextField = styled(TextField)`
  && {
    margin: 10px;
    input,
    textarea {
      font-size: ${(props: {fontSize?: string}) => props.fontSize || '12px'};
    }
    &:hover,
    input:focus,
    textarea:focus {
      box-shadow: 1px 1px 2px #888;
    }
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  flex: 1;
  border: solid 1px #ccc;
  border-radius: 4px;
  padding: 1px;
  height: 36px;
  margin-right: 10px;
`;

export const StyledSelect = styled(Select)`
  flex: 1;
`;
