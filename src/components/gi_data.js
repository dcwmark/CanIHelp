import { v4 as uuidv4 } from 'uuid';

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

export const getGiData = () => {
  return giRows;
};
