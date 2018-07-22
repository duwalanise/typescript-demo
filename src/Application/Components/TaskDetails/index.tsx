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
  onTaskEdit: () => void
}

// tslint:disable-next-line:no-console
const errorHandler = (err) => console.log(err);

const TaskDetails = observer(({myWorkStore, onTaskEdit}) => (
  <TaskDetailsWrapper>
    {/* <DetailsMenu /> */}
    {
      !!myWorkStore.getSelectedTask ?
        <TaskForm
          task={myWorkStore.getSelectedTask}
          callback={{
            error: errorHandler,
            success: onTaskEdit,
          }}
        /> :
        <NoTaskWrapper>No Task Selected</NoTaskWrapper>
    }
  </TaskDetailsWrapper>
));

export default compose<IProps, {}>(
  withProps({
    myWorkStore: store,
  }),
  withHandlers({
    onTaskEdit: ({ myWorkStore }) => (item: object, project: string) => myWorkStore.editTask(item, (myWorkStore.getSelectedMenu || project)),
  }),
)(TaskDetails);
