import { observer } from 'mobx-react';
import * as React from 'react';
import { compose, withHandlers, withProps } from 'recompose';

import store from '../../store';
import Comments from './Comments';
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
        <>
          <TaskForm
            task={myWorkStore.getSelectedTask}
            project={myWorkStore.getSelectedMenu}
            callback={{
              error: errorHandler,
              success: onTaskEdit,
            }}
          />
          <Comments />
        </> :
        <NoTaskWrapper>No Task Selected</NoTaskWrapper>
    }
  </TaskDetailsWrapper>
));

export default compose<IProps, {}>(
  withProps({
    myWorkStore: store,
  }),
  withHandlers({
    onTaskEdit: ({ myWorkStore }) => (item: object) => myWorkStore.editTask(item),
  }),
)(TaskDetails);
