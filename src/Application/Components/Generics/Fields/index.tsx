import { observer } from 'mobx-react';
import { ComboBox, DatePicker, DayOfWeek, TextField } from 'office-ui-fabric-react';
import React from 'react';

export const DatePickerField = observer(({ field, type = 'text', placeholder = null, onChange, ...restProps }) => (
  <div>
    <DatePicker
        firstDayOfWeek={DayOfWeek.Monday}
        showWeekNumbers={true}
        firstWeekOfYear={1}
        showMonthPickerAsOverlay={true}
        onSelectDate={onChange || field.onChange}
        {...field.bind({
          placeholder,
          type,
        })}
        {...restProps}
      />
    <small>
      {field.error}
    </small>
  </div>
));

export const TextInputField = observer(({ field, type = 'text', placeholder = null, onChange, ...restProps }) => (
  <div>
    <TextField
        onChanged={onChange || field.onChange}
        {...field.bind({
          placeholder,
          type,
        })}
        {...restProps}
      />
    <small>
      {field.error}
    </small>
  </div>
));

export const ComboBoxField = observer(({ field, type = 'text', placeholder = null, onChange, ...restProps }) => (
  <div>
    <ComboBox
      onChanged={onChange || field.onChange}
      text={field.value ? field.value.text : field.placeholder}
      {...field.bind({
        placeholder,
        type,
      })}
      {...restProps}
    />
    <small>
      {field.error}
    </small>
  </div>
));
