import {
  ComboBox,
  Nav,
} from 'office-ui-fabric-react';
import * as React from 'react';

import {
  groupList,
  navStyles,
} from './constants';
import {
  Body,
  Sidebar,
  Wrapper,
} from './styled';

// tslint:disable-next-line:no-console
const onClick = (value: string) => console.log(value);

const App = () => (
  <Wrapper>
    <Sidebar>
      <ComboBox
        id='Basicdrop1'
        ariaLabel='Basic ComboBox example'
        allowFreeform={ true }
        autoComplete='on'
        options={
          [
            { key: 'A', text: 'Option a' },
            { key: 'B', text: 'Option b' },
            { key: 'C', text: 'Option c' },
          ]
        }
      />
      <Nav
        groups={groupList(onClick)}
        expandedStateText={'expanded'}
        collapsedStateText={'collapsed'}
        styles={navStyles}
      />
    </Sidebar>
    <Body>Hello</Body>
  </Wrapper>
);

export default App;
