import * as React from 'react';
import MaterialTable from 'material-table';
import {
  ArrowDownward,
  ChevronLeft,
  ChevronRight,
  Clear,
  FirstPage,
  LastPage,
  SaveAltSharp,
  Search,
  ViewColumn,
} from '@material-ui/icons';

import { formatDate } from '../utils/formatDate';

import { getGiData } from './gi_data';

const tableIcons = {
  Clear: React.forwardRef((props, ref) => <Clear { ...props } ref={ ref } />),
  Export: React.forwardRef((props, ref) => <SaveAltSharp { ...props } ref={ ref } />),
  FirstPage: React.forwardRef((props, ref) => <FirstPage { ...props } ref={ ref } />),
  LastPage: React.forwardRef((props, ref) => <LastPage { ...props } ref={ ref } />),
  NextPage: React.forwardRef((props, ref) => <ChevronRight { ...props } ref={ ref } />),
  PreviousPage: React.forwardRef((props, ref) => <ChevronLeft { ...props } ref={ ref } />),
  ResetSearch: React.forwardRef((props, ref) => <Clear { ...props } ref={ ref } />),
  Search: React.forwardRef((props, ref) => <Search { ...props } ref={ ref } />),
  SortArrow: React.forwardRef((props, ref) => <ArrowDownward { ...props } ref={ ref } />),
  ViewColumn: React.forwardRef((props, ref) => <ViewColumn { ...props } ref={ ref } />)
};

const RecorderGrid = () => {
  const [rowData, setRowData] = React.useState([]);

  React.useEffect(() => {
    setRowData(getGiData);
  }, []);

  const colDefs = [{
    title: '',
    field: 'id',
    hidden: true,
  }, {
    title: 'Date',
    field: 'giDate',
    render: (row) => formatDate(row.giDate),
  }, {
    title: 'Fasting',
    field: 'fasting',
    render: (row) => {
      console.dir(row);
    },
  }, {
    field: 'comment',
    title: 'Comment',
  }];
  
  return ( 
    <div style={{ height: 400, width: '100%' }}>
      <MaterialTable
        title='GI Recorder'
        icons={ tableIcons }
        columns={ colDefs }
        data={ rowData }
        options={{
          exportButton: true
        }}
      />
    </div>
  );
};
 
export default RecorderGrid;
