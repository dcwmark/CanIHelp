import * as React from 'react';
import MaterialTable from 'material-table';
import { TableCell, TableHead, TableRow } from '@material-ui/core';
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

  // const colDefs = [{
  //   title: '',
  //   field: 'id',
  //   hidden: true,
  // }, {
  //   title: 'Date',
  //   field: 'giDate',
  //   render: (row) => formatDate(row.giDate),
  // }, {
  //   field: 'comment',
  //   title: 'Comment',
  // }];
  
  return ( 
    <div style={{ height: 400, width: '100%' }}>
      <MaterialTable
        title='GI Recorder'
        icons={ tableIcons }
        data={ rowData }
        options={{
          exportButton: true
        }}
        components={{
          Header: props => {
            return (
              <TableHead>
                <TableRow>
                  <TableCell align="center">Date</TableCell>
                  <TableCell align="center">Fasting</TableCell>
                  <TableCell colSpan={ 3 } align="center">Breakfast</TableCell>
                  <TableCell colSpan={ 3 } align="center">Lunch</TableCell>
                  <TableCell colSpan={ 3 } align="center">Dinner</TableCell>
                  <TableCell align="center">Other</TableCell>
                  <TableCell>Comment</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="center">GI</TableCell>
                  <TableCell align="center">Before</TableCell>
                  <TableCell align="center">GI</TableCell>
                  <TableCell align="center">After</TableCell>
                  <TableCell align="center">Before</TableCell>
                  <TableCell align="center">GI</TableCell>
                  <TableCell align="center">After</TableCell>
                  <TableCell align="center">Before</TableCell>
                  <TableCell align="center">GI</TableCell>
                  <TableCell align="center">After</TableCell>
                  <TableCell align="center">GI</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
            );
          },
          Row: ({ data }) => {
            return (
              <TableRow>
                <TableCell>{ formatDate(data.giDate) }</TableCell>
                <TableCell>{ data.comment }</TableCell>
              </TableRow>
            );
          },
        }}
      />
    </div>
  );
};
 
export default RecorderGrid;
