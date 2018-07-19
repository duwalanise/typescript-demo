import * as React from 'react';
import 'react-select/dist/react-select.css';

import {
  StyledSelect
} from './styled';

const SelectPerson = (props) => (
  <StyledSelect
    name="assignee"
    value={props.selectedPerson}
    onChange={props.handlePersonChange}
    options={[
      { value: 'one', label: 'Person 1' },
      { value: 'two', label: 'Person 2' },
      { value: 'three', label: 'Person 3' },
      { value: 'four', label: 'Person 4' },
      { value: 'five', label: 'Person 5' },
    ]}
  />
);

export default SelectPerson;
