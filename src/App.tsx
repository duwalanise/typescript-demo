import {observer} from 'mobx-react';
import {
  // ComboBox,
  Nav,
} from 'office-ui-fabric-react';
import * as React from 'react';
import {
  compose,
  withHandlers,
  withProps,
} from 'recompose';

import TaskForm from './components/TaskForm';
import TaskMenu from './components/TaskMenu';
import {
  groupList,
  navStyles,
} from './constants';
import Table from './generics/table';
import taskStore from './store';
import {
  Body,
  NoTaskWrapper,
  Sidebar,
  TableWrapper,
  TaskDetailsWrapper,
  TaskListWrapper,
  Wrapper,
} from './styled';

interface IProps {
  onMenuSelect: () => void,
  onRowSelect: () => void,
  taskStore: {
    selectedTask:  any,
    setSelectedMenu: (value: string) => void,
    setSelectedTask: (item: object) => void,
    taskList: object[],
  },
}

const Columns = [
  {
    fieldName: 'id',
    key: 'column1',
    maxWidth: 100,
    minWidth: 50,
    name: 'ID'
  },
  {
    fieldName: 'title',
    key: 'column2',
    maxWidth: 200,
    minWidth: 100,
    name: 'Title'
  },
  {
    fieldName: 'state',
    key: 'column3',
    maxWidth: 200,
    minWidth: 100,
    name: 'State'
  },
  {
    fieldName: 'createdAt',
    key: 'column4',
    maxWidth: 200,
    minWidth: 100,
    name: 'Created At'
  },
];

const App = observer((props: IProps ) => (
  <Wrapper>
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
        groups={groupList(props.onMenuSelect)}
        expandedStateText={'expanded'}
        collapsedStateText={'collapsed'}
        styles={navStyles}
      />
    </Sidebar>
    <Body>
      <TaskListWrapper>
        <TaskMenu />
        {
          props.taskStore.taskList ? (
            <TableWrapper>
              <Table items={props.taskStore.taskList} columns={Columns} onRowSelect={props.onRowSelect} />
            </TableWrapper>
          ) :
          <NoTaskWrapper> No Task List </NoTaskWrapper>
        }
      </TaskListWrapper>
      <TaskDetailsWrapper>
        {
          props.taskStore.selectedTask ?
          <TaskForm task={props.taskStore.selectedTask} /> :
          <NoTaskWrapper>No Task Selected</NoTaskWrapper>
        }
      </TaskDetailsWrapper>
    </Body>
  </Wrapper>
));

export default compose<IProps, {}>(
  withProps({
    taskStore,
  }),
  withHandlers({
    onMenuSelect: (props: IProps) => (value: string) => props.taskStore.setSelectedMenu(value),
    onRowSelect: (props: IProps) => (item: object) => props.taskStore.setSelectedTask(item),
  }),
)(App);
