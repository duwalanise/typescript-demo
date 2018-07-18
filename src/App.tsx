import {
  ComboBox,
  Nav,
} from 'office-ui-fabric-react';
import * as React from 'react';

import { groupList, navStyles } from './constants';
import {
  Body,
  Sidebar,
  Wrapper,
} from './styled';

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
        groups={groupList}
        expandedStateText={'expanded'}
        collapsedStateText={'collapsed'}
        selectedKey={'key1'}
        styles={navStyles}
      />
    </Sidebar>
    <Body>Hello</Body>
  </Wrapper>
);

export default App;
