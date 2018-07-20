import {observer} from 'mobx-react';
import {
  CommandBar,
  ICommandBarItemProps,
  // TextField,
} from 'office-ui-fabric-react';
import * as React from 'react';
import SimpleInput from '../simpleInput';

import {
  Wrapper
} from './styled';

const formSubmit = (form) => (evt) => {
  // evt.preventDefault();
  // tslint:disable-next-line:no-console
  form.onSubmit(evt);
}

const commandBarItems = (form) => [
  {
    iconProps: {
      iconName: 'Save',
    },
    key: 'Save',
    name: 'Save',
    // tslint:disable-next-line:no-console
    onClick: formSubmit(form),
    title: 'Save',
  },
  {
    hidden: true,
    iconProps: {
      iconName: 'Undo',
    },
    key: 'Undo',
    name: 'Undo',
    onClick: formSubmit(form),
    title: 'Undo Changes',
  },
] as ICommandBarItemProps[];

const TaskDetails = observer(({form}) => (
  <Wrapper
    onSubmit={formSubmit(form)}
  >
    <CommandBar
      items={commandBarItems(form)}
      ariaLabel={'Use left and right arrow keys to navigate between commands'}
    />
    <SimpleInput field={form.$('email')} />
    <SimpleInput field={form.$('password')} />
  </Wrapper>
));

export default TaskDetails;
