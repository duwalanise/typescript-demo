import {
  IconButton,
} from 'office-ui-fabric-react';
import * as React from 'react';
import { compose, withHandlers, withState } from 'recompose';
import {
    MenuWrapper,
} from './styled';

const TaskMenu = (props) => (
	<MenuWrapper>
    <IconButton
      iconProps={{ iconName: 'Attach' }}
      title="Attachment"
      ariaLabel="Attachment"
    />
    <IconButton
      iconProps={{ iconName: 'BranchFork2' }}
      title="Create Sub Task"
      ariaLabel="Sub Task"
    />
    <IconButton
      iconProps={{ iconName: 'Link' }}
      title="Copy Link"
      ariaLabel="Copy Link"
    />
    <IconButton
      iconProps={{ iconName: 'More' }}
      title="More"
      ariaLabel="More"
    />
	</MenuWrapper>
);

export default compose(
	withState('showPanel', 'togglePanel', false),
	withHandlers({
		onPanelClose: (props: any) => () => props.togglePanel(false),
		onPanelOpen: (props: any) => () => props.togglePanel(true),
	})
)(TaskMenu);
