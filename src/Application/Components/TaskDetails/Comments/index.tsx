import * as React from 'react';

import CommentBox from './CommentBox';
import {
  CommentWrapper,
} from './styled';

const Comments = () => (
  <CommentWrapper>
    <div style={{overflow: 'auto', flex: 1}}>
      {[1,2].map( val => <div key={val} style={{padding: 20}}>Hello comment</div>)}
    </div>
    <CommentBox callback={{
      // tslint:disable-next-line:no-console
      error: (err) => console.log(err),
      // tslint:disable-next-line:no-console
      success: (val) => console.log(val),
    }}/>
  </CommentWrapper>
);

export default Comments;
