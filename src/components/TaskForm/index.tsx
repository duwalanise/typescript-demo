import {
  DayOfWeek,
} from 'office-ui-fabric-react';
import * as React from 'react';
import { compose, withHandlers, withState } from 'recompose';

import SelectAssignee from './SelectPerson';
import {
  FieldWrapper,
  FormWrapper,
  StyledDatePicker,
  StyledTextField,
} from './styled';

interface IProps {
  task: any,
  handlePersonChange: () => void
}

const TaskForm = (props: IProps) => (
	<FormWrapper>
    <StyledTextField
      borderless={true}
      fontSize="20px"
      placeholder="Write your task name"
    />
    <FieldWrapper>
      <StyledDatePicker
        firstDayOfWeek={DayOfWeek.Monday}
        showWeekNumbers={true}
        firstWeekOfYear={1}
        showMonthPickerAsOverlay={true}
        placeholder="Due Date"
      />
      <SelectAssignee handlePersonChange={props.handlePersonChange}/>
    </FieldWrapper>
    <StyledTextField
          multiline={true}
          rows={6}
          borderless={true}
          placeholder="Add description to your task"
        />
	</FormWrapper>
);

export default compose<any, any>(
	withState('showPanel', 'togglePanel', false),
	withHandlers({
		// tslint:disable-next-line:no-console
		handlePersonChange: (props: any) => () => console.log('triggered'),
		onPanelOpen: (props: any) => () => props.togglePanel(true),
	})
)(TaskForm);
