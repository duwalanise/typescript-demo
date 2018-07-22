import {
  CommandBar,
  ICommandBarItemProps,
	Panel,
	PanelType,
} from 'office-ui-fabric-react';
import * as React from 'react';
import { compose, withHandlers, withState } from 'recompose';
import TaskForm from '../../TaskDetails/TaskForm';

const commandBarItems = (props) => [
  {
    iconProps: {
      iconName: 'Add',
    },
    key: 'Add',
    name: 'New Task',
    onClick: props.onPanelOpen,
    title: 'Add new task',
  }
] as ICommandBarItemProps[];

// tslint:disable-next-line:no-console
const errorHandler = (err) => console.log(err);

const TaskMenu = (props) => (
	<div>
    <CommandBar
      items={commandBarItems(props)}
      ariaLabel={'Use left and right arrow keys to navigate between commands'}
    />
		<Panel
			isOpen={props.showPanel}
			type={PanelType.medium}
			onDismiss={props.onPanelClose}
			headerText="Add New Task"
			closeButtonAriaLabel="Close"
			// onRenderFooterContent={this._onRenderFooterContent}
		>
		<div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
			<TaskForm
        task={{}}
        callback={{
          error: errorHandler,
          success: errorHandler,
        }}
      />
		</div>
		</Panel>
	</div>
);

export default compose(
	withState('showPanel', 'togglePanel', false),
	withHandlers({
		onPanelClose: (props: any) => () => props.togglePanel(false),
		onPanelOpen: (props: any) => () => props.togglePanel(true),
	})
)(TaskMenu);
