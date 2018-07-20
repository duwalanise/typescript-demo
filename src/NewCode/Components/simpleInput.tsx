import { observer } from 'mobx-react';
import { DatePicker, DayOfWeek } from 'office-ui-fabric-react';
import React from 'react';

// styles
const $small = 'f6 black-60 db red';

export default observer(({ field, type = 'text', placeholder = null }) => (
  <div className="measure">
    <DatePicker
        firstDayOfWeek={DayOfWeek.Monday}
        showWeekNumbers={true}
        firstWeekOfYear={1}
        showMonthPickerAsOverlay={true}
        onSelectDate={field.onChange}
        {...field.bind({ type, placeholder }) }
      />
    <small className={$small}>
      {field.error}
    </small>
  </div>
));
