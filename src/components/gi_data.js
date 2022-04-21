import { v4 as uuidv4 } from 'uuid';

const giRows = [{
  id: uuidv4(),
  giDate: (new Date(2021, 8, 1)).toString(),
  meals: [{
    mealType: 'fasting',
    whenDosage: [{
      when: '',
      gi: 90,
    }],
  }, {
    mealType: 'breakfast',
    whenDosage: [{
      when: 'before',
      gi: 90,
    }, {
      when: 'after',
      gi: 90,
    }],
  }, {
    mealType: 'lunch',
    whenDosage: [{
      when: 'before',
      gi: 100,
    }, {
      when: 'after',
      gi: 100,
    }],
  }, {
    mealType: 'dinner',
    whenDosage: [{
      when: 'before',
      gi: 110,
    }, {
      when: 'after',
      gi: 110,
    }],
  }, {
    mealType: 'other',
    whenDosage: [{
      when: '',
      gi: 120,
    }],
  }],
  comment: 'A',
}, {
  id: uuidv4(),
  giDate: (new Date(2021, 8, 2)).toString(),
  meals: [{
    mealType: 'fasting',
    whenDosage: [{
      when: '',
      gi: 80,
    }],
  }, {
    mealType: 'breakfast',
    whenDosage: [{
      when: 'before',
      gi: 90,
    }, {
      when: 'after',
      gi: 90,
    }],
  }, {
    mealType: 'lunch',
    whenDosage: [{
      when: 'before',
      gi: 100,
    }, {
      when: 'after',
      gi: 100,
    }],
  }, {
    mealType: 'dinner',
    whenDosage: [{
      when: 'before',
      gi: 110,
    }, {
      when: 'after',
      gi: 110,
    }],
  }, {
    mealType: 'other',
    whenDosage: [{
      when: '',
      gi: 120,
    }],
  }],
  comment: 'B',
}, {
  id: uuidv4(),
  giDate: (new Date(2021, 8, 3)).toString(),
  meals: [{
    mealType: 'fasting',
    whenDosage: [{
      when: '',
      gi: 70,
    }],
  }, {
    mealType: 'breakfast',
    whenDosage: [{
      when: 'before',
      gi: 80,
    }, {
      when: 'after',
      gi: 80,
    }],
  }, {
    mealType: 'lunch',
    whenDosage: [{
      when: 'before',
      gi: 90,
    }, {
      when: 'after',
      gi: 90,
    }],
  }, {
    mealType: 'dinner',
    whenDosage: [{
      when: 'before',
      gi: 100,
    }, {
      when: 'after',
      gi: 100,
    }],
  }, {
    mealType: 'other',
    whenDosage: [{
      when: '',
      gi: 110,
    }],
  }],
  comment: 'C',
}];

export const getGiData = () => {
  return giRows;
};
