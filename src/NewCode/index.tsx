import {observer} from 'mobx-react';
import * as React from 'react';
import TaskDetails from './Components/TaskDetails';
import form from './form';
import {
  Wrapper
} from './styled';

const App = observer(() => (
  <Wrapper>
    <div style={{width: 200}}>sidebar</div>
    <div style={{flex: 1}}>Task List</div>
    <TaskDetails form={form} />
  </Wrapper>
));

export default App;
