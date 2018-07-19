import {
	DefaultButton,
	Panel,
	PanelType,
} from 'office-ui-fabric-react';
import * as React from 'react';
import { compose, withHandlers, withState } from 'recompose';
import {
    MenuWrapper,
} from './styled';

const TaskMenu = (props) => (
	<MenuWrapper>
		<DefaultButton
		primary={true}
		data-automation-id="test"
		text="Add New"
		onClick={props.onPanelOpen}
		allowDisabledFocus={true}
		/>
		<Panel
			isOpen={props.showPanel}
			type={PanelType.medium}
			onDismiss={props.onPanelClose}
			headerText="Add New Task"
			closeButtonAriaLabel="Close"
			// onRenderFooterContent={this._onRenderFooterContent}
		>
		Hello
		</Panel>
	</MenuWrapper>
);

export default compose(
	withState('showPanel', 'togglePanel', false),
	withHandlers({
		onPanelClose: (props: any) => () => props.togglePanel(false),
		onPanelOpen: (props: any) => () => props.togglePanel(true),
	})
)(TaskMenu);
