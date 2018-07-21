import { observer } from 'mobx-react';
import { DatePicker, DayOfWeek } from 'office-ui-fabric-react';
import React from 'react';

// styles
const $small = 'f6 black-60 db red';

export default observer(({ field, type = 'text', placeholder = null, onChange }) => (
  <div className="measure">
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
      />
    <small className={$small}>
      {field.error}
    </small>
  </div>
));
