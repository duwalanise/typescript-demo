import * as React from 'react';

import { TextInputField } from '../../../../Components/Generics/Fields';
import createForm from './form';
import {
  CBWrapper,
} from './styled';

const Comments = (props) => {
  const form = createForm(props.callback);
  return (
  <CBWrapper
    onSubmit={form.onSubmit}>
      <TextInputField
        autoComplete="off"
        field={form.$('comment')}
      />
  </CBWrapper>
);
}

export default Comments;
