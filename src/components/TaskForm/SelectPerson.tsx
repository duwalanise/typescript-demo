import {
  ComboBox
} from 'office-ui-fabric-react';
import * as React from 'react';
const SelectPerson = (props) => (
  <ComboBox
    id='Basicdrop1'
    defaultSelectedKey='D'
    ariaLabel='Basic ComboBox example'
    allowFreeform={ false }
    onChange={props.handlePersonChange}
    autoComplete='on'
    options={
      [
        { key: 'D', text: 'Select Assignee' },
        { key: 'A', text: 'Option a' },
        { key: 'B', text: 'Option b' },
        { key: 'C', text: 'Option c' },
      ]
    }
  />
);

export default SelectPerson;
