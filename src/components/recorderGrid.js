import { v4 as uuidv4 } from 'uuid';
import { forwardRef } from 'react';
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

import formatDate from '../utils/formatDate';

const tableIcons = {
  Clear: forwardRef((props, ref) => <Clear { ...props } ref={ ref } />),
  Export: forwardRef((props, ref) => <SaveAltSharp { ...props } ref={ ref } />),
  FirstPage: forwardRef((props, ref) => <FirstPage { ...props } ref={ ref } />),
  LastPage: forwardRef((props, ref) => <LastPage { ...props } ref={ ref } />),
  NextPage: forwardRef((props, ref) => <ChevronRight { ...props } ref={ ref } />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft { ...props } ref={ ref } />),
  ResetSearch: forwardRef((props, ref) => <Clear { ...props } ref={ ref } />),
  Search: forwardRef((props, ref) => <Search { ...props } ref={ ref } />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward { ...props } ref={ ref } />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn { ...props } ref={ ref } />)
};

const recorderGrid = () => {
  const giRows = [{
    id: uuidv4(),
    giDate: (new Date(2021, 8, 1)).toString(),
    meals: [{
      mealType: 'fasting',
      whenDosage: 'before',
      gi: 100,
    }, {
      mealType: 'breakfast',
      whenDosage: 'after',
      gi: 90,
    }, {
      mealType: 'lunch',
      whenDosage: 'after',
      gi: 80,
    }, {
      mealType: 'dinner',
      whenDosage: 'before',
      gi: 85,
    }, {
      mealType: 'other',
      whenDosage: 'before',
      gi: 101,
    }],
    comment: 'A',
  }, {  
    id: uuidv4(),
    giDate: (new Date(2021, 8, 2)).toString(),
    meals: [{
      mealType: 'fasting',
      whenDosage: 'before',
      gi: 100,
    }, {
      mealType: 'breakfast',
      whenDosage: 'after',
      gi: 90,
    }, {
      mealType: 'lunch',
      whenDosage: 'after',
      gi: 80,
    }, {
      mealType: 'dinner',
      whenDosage: 'before',
      gi: 85,
    }, {
      mealType: 'other',
      whenDosage: 'before',
      gi: 101,
    }],
    comment: 'B',
  }, {  
    id: uuidv4(),
    giDate: (new Date(2021, 8, 3)).toString(),
    meals: [{
      mealType: 'fasting',
      whenDosage: 'before',
      gi: 100,
    }, {
      mealType: 'breakfast',
      whenDosage: 'after',
      gi: 90,
    }, {
      mealType: 'lunch',
      whenDosage: 'after',
      gi: 80,
    }, {
      mealType: 'dinner',
      whenDosage: 'before',
      gi: 85,
    }, {
      mealType: 'other',
      whenDosage: 'before',
      gi: 101,
    }],
    comment: 'C',
  }];

  const giCols = [{
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
        columns={ giCols }
        data={ giRows }
        options={{
          exportButton: true
        }}
      />
    </div>
  );
};
 
export default recorderGrid;
