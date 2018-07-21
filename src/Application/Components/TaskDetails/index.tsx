import { observer } from 'mobx-react';
import * as React from 'react';
import { compose, withHandlers, withProps } from 'recompose';

import store from '../../store';
import {
  NoTaskWrapper,
  TaskDetailsWrapper,
} from './styled';
import TaskForm from './TaskForm';

interface IProps {
  task: object | null,
}

const TaskDetails = observer(({myWorkStore}) => (
  <TaskDetailsWrapper>
    {/* <DetailsMenu /> */}
    {
      !!myWorkStore.getSelectedTask ?
        <TaskForm task={myWorkStore.getSelectedTask} /> :
        <NoTaskWrapper>No Task Selected</NoTaskWrapper>
    }
  </TaskDetailsWrapper>
));

export default compose<IProps, {}>(
  withProps({
    myWorkStore: store,
  }),
  withHandlers({
    onTaskEdit: ({ myWorkStore }) => (item: object, project: string) => myWorkStore.addTask(item, project),
  }),
)(TaskDetails);
