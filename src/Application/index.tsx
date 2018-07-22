import * as React from 'react';
import { compose, withHandlers, withProps } from 'recompose';
import styled from 'styled-components';

import { observer } from 'mobx-react';
import Sidebar from './Components/Sidebar';
import TaskDetails from './Components/TaskDetails';
import TaskList from './Components/TaskList';
import store from './store';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

interface IProps {
  onMenuSelect: () => void,
  onRowSelect: () => void,
  onTaskAdd: () => void,
  myWorkStore: {
    selectedTask:  any,
    setSelectedMenu: (value: string) => void,
    setSelectedTask: (item: object) => void,
    getTasks: object[],
  },
}

const MyWork = observer(({
  myWorkStore,
  onMenuSelect,
  onRowSelect,
  onTaskAdd,
}: IProps) => (
  <Wrapper>
    <Sidebar
      onMenuSelect={onMenuSelect}
    />
    <TaskList
      tasks={myWorkStore.getTasks}
      onRowSelect={onRowSelect}
    />
    <TaskDetails />
  </Wrapper>
));

export default compose<IProps, {}>(
  withProps({
    myWorkStore: store,
  }),
  withHandlers({
    onMenuSelect: ({ myWorkStore }) => (value: string) => myWorkStore.setSelectedMenu(value),
    onRowSelect: ({ myWorkStore }) => (item: object) => myWorkStore.setSelectedTask(item),
  }),
)(MyWork);
