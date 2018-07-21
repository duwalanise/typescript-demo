import {
  CommandBar,
  ICommandBarItemProps,
  // TextField,
} from 'office-ui-fabric-react';
import * as React from 'react';

import form from '../form';
import SimpleInput from '../simpleInput';

const commandBarItems = () => [
  {
    iconProps: {
      iconName: 'Save',
    },
    key: 'Save',
    name: 'Save',
    // tslint:disable-next-line:no-console
    onClick: form.onSubmit,
    title: 'Save',
  },
  {
    hidden: true,
    iconProps: {
      iconName: 'Undo',
    },
    key: 'Undo',
    name: 'Undo',
    onClick: form.onClear,
    title: 'Undo Changes',
  },
] as ICommandBarItemProps[];

function handleChange(field, evt) {
  // tslint:disable-next-line:no-console
  console.log(evt);
  // tslint:disable-next-line:no-debugger
  field.set('value', evt);
}

const TaskForm = (props) => {
  form.$('password').set('rules', 'required');
  return (
  <>
    <CommandBar
      items={commandBarItems()}
      ariaLabel={'Use left and right arrow keys to navigate between commands'}
    />
    <SimpleInput field={form.$('email')} onChange={handleChange.bind(null, form.$('email'))} />
    <SimpleInput field={form.$('password')} />
  </>
)};

export default TaskForm;
