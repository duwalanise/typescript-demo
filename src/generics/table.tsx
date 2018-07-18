import {
  DetailsList,
  DetailsListLayoutMode,
  // Selection,
  SelectionMode,
  // ISelectionOptions,
} from 'office-ui-fabric-react';
import * as React from 'react';

// const SelectionHandler = new Selection({
//   onSelectionChanged: (items: ISelectionOptions) => console.log(items)
// });

interface IProps {
  items: any[],
  columns: any[],
  onRowSelect: (row: object) => void
}

const Table = (props: IProps) => (
  <DetailsList
    items={props.items}
    columns={props.columns}
    setKey="set"
    selectionMode={SelectionMode.none}
    layoutMode={DetailsListLayoutMode.justified}
    onActiveItemChanged={props.onRowSelect}
    // selection={SelectionHandler}
    // selectionPreservedOnEmptyClick={true}
    // onItemInvoked={this._onItemInvoked}
    compact={true}
  />
);

export default Table;
