import {
  CommandBar,
  ICommandBarItemProps,
} from 'office-ui-fabric-react';
import * as React from 'react';

import {
  ComboBoxField,
  DatePickerField,
  TextInputField,
} from '../../Generics/Fields';
import createForm from './form';
import { FieldWrapper, FormWrapper } from './styled';

const commandBarItems = (form) => [
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
    name: 'Clear',
    onClick: form.onClear,
    title: 'Clear Changes',
  },
] as ICommandBarItemProps[];

// For custom onChange Handler pass handler function to onChange props
function handleChange(field: any, evt: object|string) {
  field.set('value', evt);
  // For dynamic validation
  // if (evt) {
  //   form.$('password').set('rules', 'required');
  // } else {
  //   form.$('password').set('rules', '');
  // }
}

const TaskForm = (props) => {
  const form = createForm(props.task, props.callback);
  return (
  <>
    <CommandBar
      items={commandBarItems(form)}
      ariaLabel={'Use left and right arrow keys to navigate between commands'}
    />
    <FormWrapper>
      { !props.project &&
      <ComboBoxField
        field={form.$('project')}
        id='Basicdrop1'
        ariaLabel='Basic ComboBox example'
        allowFreeform={ false }
        autoComplete='on'
        options={
          [
            { key: 'D', text: 'Select Project' },
            { key: 'A', text: 'Project a' },
            { key: 'B', text: 'Project b' },
            { key: 'C', text: 'Project c' },
          ]
        }
      /> }
      <TextInputField
        field={form.$('title')}
        onChange={handleChange.bind(null, form.$('title'))} />
      <FieldWrapper>
        <DatePickerField
          field={form.$('dueDate')}
        />
        <ComboBoxField
          field={form.$('assignee')}
          id='Basicdrop1'
          ariaLabel='Basic ComboBox example'
          allowFreeform={ false }
          autoComplete='on'
          options={
            [
              { key: 'D', text: 'Select Assignee' },
              { key: 'A', text: 'Option a' },
              { key: 'B', text: 'Option b' },
              { key: 'C', text: 'Option c' },
            ]
          }
        />
      </FieldWrapper>
      <TextInputField
        field={form.$('description')}
        multiline={true}
        rows={6}
      />
    </FormWrapper>
  </>
)};

export default TaskForm;
