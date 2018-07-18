import * as React from 'react';
import {
  ComboBox,
  Nav,
} from 'office-ui-fabric-react';
import {
  compose,
  withHandlers,
  withState,
} from 'recompose';

import {
  groupList,
  navStyles,
} from './constants';
import {
  Body,
  Sidebar,
  Wrapper,
} from './styled';

interface IProps {
  onClick: () => void,
  selectedTask: string,
  updateSelected: (value: string) => void,
}

const App = (props: IProps ) => (
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
        groups={groupList(props.onClick)}
        expandedStateText={'expanded'}
        collapsedStateText={'collapsed'}
        styles={navStyles}
      />
    </Sidebar>
    <Body>{props.selectedTask}</Body>
  </Wrapper>
);

export default compose<IProps, {}>(
  withState('selectedTask', 'updateSelected', ''),
  withHandlers({
    onClick: (props: IProps) => (value: string) => props.updateSelected(value)
  }),
)(App);
