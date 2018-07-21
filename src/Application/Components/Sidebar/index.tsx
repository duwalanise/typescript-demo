import {
  // ComboBox,
  Nav,
} from 'office-ui-fabric-react';
import * as React from 'react';

import {
  groupList,
  navStyles,
} from './constants';
import { Sidebar } from './styled';

const MySidebar = ({ onMenuSelect }) => (
  <Sidebar>
    {/* <ComboBox
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
    /> */}
    <Nav
      groups={groupList(onMenuSelect)}
      expandedStateText={'expanded'}
      collapsedStateText={'collapsed'}
      styles={navStyles}
    />
  </Sidebar>
);

export default MySidebar;
