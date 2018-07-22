import * as React from 'react';

import Table from '../Generics/Table';
import {
  NoTaskWrapper,
  TableWrapper,
  TaskListWrapper,
} from './styled';
import TaskMenu from './TaskMenu';

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
    fieldName: 'dueDate',
    key: 'column4',
    maxWidth: 200,
    minWidth: 100,
    name: 'Due Date'
  },
];

interface IProps {
  tasks: object[],
  onRowSelect: () => void,
  onTaskAdd: () => void,
}

const TaskList = (props: IProps) => (
  <TaskListWrapper>
  <TaskMenu />
  {
    props.tasks ? (
      <TableWrapper>
        <Table items={props.tasks} columns={Columns} onRowSelect={props.onRowSelect} />
      </TableWrapper>
    ) :
    <NoTaskWrapper> No Task List </NoTaskWrapper>
  }
</TaskListWrapper>
);

export default TaskList;
