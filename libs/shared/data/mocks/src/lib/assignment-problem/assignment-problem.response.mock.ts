import {HungarianMethodResponse} from '@opres/shared/types';

export const assignmentProblemResponseWithGreedy1: HungarianMethodResponse = [
  {
    reduce: {
      reduce: [
        {
          '0': 0,
          '1': 1,
          '2': 3,
          '3': 4,
          '4': 5,
          '5': 8,
        },
        {
          '0': 7,
          '1': 0,
          '2': 2,
          '3': 2,
          '4': 0,
          '5': 4,
        },
        {
          '0': 2,
          '1': 5,
          '2': 7,
          '3': 1,
          '4': 0,
          '5': 1,
        },
        {
          '0': 0,
          '1': 0,
          '2': 0,
          '3': 0,
          '4': 2,
          '5': 1,
        },
        {
          '0': 3,
          '1': 3,
          '2': 4,
          '3': 2,
          '4': 0,
          '5': 0,
        },
        {
          '0': 1,
          '1': 6,
          '2': 7,
          '3': 3,
          '4': 2,
          '5': 0,
        },
      ],
    },
    currentTable: [
      {
        '0': 0,
        '1': 1,
        '2': 3,
        '3': 4,
        '4': 5,
        '5': 8,
      },
      {
        '0': 7,
        '1': 0,
        '2': 2,
        '3': 2,
        '4': 0,
        '5': 4,
      },
      {
        '0': 2,
        '1': 5,
        '2': 7,
        '3': 1,
        '4': 0,
        '5': 1,
      },
      {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 2,
        '5': 1,
      },
      {
        '0': 3,
        '1': 3,
        '2': 4,
        '3': 2,
        '4': 0,
        '5': 0,
      },
      {
        '0': 1,
        '1': 6,
        '2': 7,
        '3': 3,
        '4': 2,
        '5': 0,
      },
    ],
  },
  {
    currentTable: [
      {
        '0': 0,
        '1': 1,
        '2': 3,
        '3': 4,
        '4': 5,
        '5': 8,
      },
      {
        '0': 7,
        '1': 0,
        '2': 2,
        '3': 2,
        '4': 0,
        '5': 4,
      },
      {
        '0': 2,
        '1': 5,
        '2': 7,
        '3': 1,
        '4': 0,
        '5': 1,
      },
      {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 2,
        '5': 1,
      },
      {
        '0': 3,
        '1': 3,
        '2': 4,
        '3': 2,
        '4': 0,
        '5': 0,
      },
      {
        '0': 1,
        '1': 6,
        '2': 7,
        '3': 3,
        '4': 2,
        '5': 0,
      },
    ],
    koenigAlgorithm: [
      {
        selectedIndependentZeros: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 1,
          },
          {
            x: 4,
            y: 2,
          },
          {
            x: 2,
            y: 3,
          },
          {
            x: 5,
            y: 4,
          },
        ],
        reachedRows: [5],
        targetColumns: [3],
        verifiedLines: {
          rows: [],
          columns: [],
        },
        columnToRowMarks: {},
      },
      {
        selectedIndependentZeros: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 1,
          },
          {
            x: 4,
            y: 2,
          },
          {
            x: 2,
            y: 3,
          },
          {
            x: 5,
            y: 4,
          },
        ],
        reachedRows: [4],
        targetColumns: [3],
        verifiedLines: {
          rows: [5],
          columns: [5],
        },
        columnToRowMarks: {
          '5': 5,
        },
      },
      {
        selectedIndependentZeros: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 1,
          },
          {
            x: 4,
            y: 2,
          },
          {
            x: 2,
            y: 3,
          },
          {
            x: 5,
            y: 4,
          },
        ],
        reachedRows: [2],
        targetColumns: [3],
        verifiedLines: {
          rows: [5, 4],
          columns: [5, 4],
        },
        columnToRowMarks: {
          '4': 4,
          '5': 5,
        },
      },
      {
        selectedIndependentZeros: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 1,
          },
          {
            x: 4,
            y: 2,
          },
          {
            x: 2,
            y: 3,
          },
          {
            x: 5,
            y: 4,
          },
        ],
        reachedRows: [],
        targetColumns: [3],
        verifiedLines: {
          rows: [5, 4, 2],
          columns: [5, 4],
        },
        columnToRowMarks: {
          '4': 4,
          '5': 5,
        },
        strikeThroughs: {
          rows: [0, 1, 3],
          columns: [4, 5],
        },
      },
    ],
    transformation: {
      outputTable: [
        {
          '0': 0,
          '1': 1,
          '2': 3,
          '3': 4,
          '4': 6,
          '5': 9,
        },
        {
          '0': 7,
          '1': 0,
          '2': 2,
          '3': 2,
          '4': 1,
          '5': 5,
        },
        {
          '0': 1,
          '1': 4,
          '2': 6,
          '3': 0,
          '4': 0,
          '5': 1,
        },
        {
          '0': 0,
          '1': 0,
          '2': 0,
          '3': 0,
          '4': 3,
          '5': 2,
        },
        {
          '0': 2,
          '1': 2,
          '2': 3,
          '3': 1,
          '4': 0,
          '5': 0,
        },
        {
          '0': 0,
          '1': 5,
          '2': 6,
          '3': 2,
          '4': 2,
          '5': 0,
        },
      ],
      transformCells: [
        {
          x: 4,
          y: 0,
          value: 1,
        },
        {
          x: 5,
          y: 0,
          value: 1,
        },
        {
          x: 4,
          y: 1,
          value: 1,
        },
        {
          x: 5,
          y: 1,
          value: 1,
        },
        {
          x: 0,
          y: 2,
          value: -1,
        },
        {
          x: 1,
          y: 2,
          value: -1,
        },
        {
          x: 2,
          y: 2,
          value: -1,
        },
        {
          x: 3,
          y: 2,
          value: -1,
        },
        {
          x: 4,
          y: 3,
          value: 1,
        },
        {
          x: 5,
          y: 3,
          value: 1,
        },
        {
          x: 0,
          y: 4,
          value: -1,
        },
        {
          x: 1,
          y: 4,
          value: -1,
        },
        {
          x: 2,
          y: 4,
          value: -1,
        },
        {
          x: 3,
          y: 4,
          value: -1,
        },
        {
          x: 0,
          y: 5,
          value: -1,
        },
        {
          x: 1,
          y: 5,
          value: -1,
        },
        {
          x: 2,
          y: 5,
          value: -1,
        },
        {
          x: 3,
          y: 5,
          value: -1,
        },
      ],
      strikeThroughs: {
        rows: [0, 1, 3],
        columns: [4, 5],
      },
      epsilon: 1,
    },
  },
  {
    currentTable: [
      {
        '0': 0,
        '1': 1,
        '2': 3,
        '3': 4,
        '4': 6,
        '5': 9,
      },
      {
        '0': 7,
        '1': 0,
        '2': 2,
        '3': 2,
        '4': 1,
        '5': 5,
      },
      {
        '0': 1,
        '1': 4,
        '2': 6,
        '3': 0,
        '4': 0,
        '5': 1,
      },
      {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 3,
        '5': 2,
      },
      {
        '0': 2,
        '1': 2,
        '2': 3,
        '3': 1,
        '4': 0,
        '5': 0,
      },
      {
        '0': 0,
        '1': 5,
        '2': 6,
        '3': 2,
        '4': 2,
        '5': 0,
      },
    ],
    koenigAlgorithm: [
      {
        selectedIndependentZeros: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 1,
          },
          {
            x: 3,
            y: 2,
          },
          {
            x: 2,
            y: 3,
          },
          {
            x: 4,
            y: 4,
          },
          {
            x: 5,
            y: 5,
          },
        ],
      },
    ],
  },
];

export const assignmentProblemResponseWithGreedy2: HungarianMethodResponse = [
  {
    reduce: {
      reduce: [
        {
          '0': 0,
          '1': 1,
          '2': 3,
          '3': 4,
          '4': 5,
          '5': 7,
        },
        {
          '0': 7,
          '1': 0,
          '2': 2,
          '3': 2,
          '4': 0,
          '5': 3,
        },
        {
          '0': 2,
          '1': 5,
          '2': 7,
          '3': 1,
          '4': 0,
          '5': 0,
        },
        {
          '0': 0,
          '1': 0,
          '2': 0,
          '3': 0,
          '4': 2,
          '5': 0,
        },
        {
          '0': 4,
          '1': 4,
          '2': 5,
          '3': 3,
          '4': 1,
          '5': 0,
        },
        {
          '0': 2,
          '1': 7,
          '2': 8,
          '3': 4,
          '4': 3,
          '5': 0,
        },
      ],
    },
    currentTable: [
      {
        '0': 1,
        '1': 2,
        '2': 4,
        '3': 5,
        '4': 6,
        '5': 8,
      },
      {
        '0': 9,
        '1': 2,
        '2': 4,
        '3': 4,
        '4': 2,
        '5': 5,
      },
      {
        '0': 3,
        '1': 6,
        '2': 8,
        '3': 2,
        '4': 1,
        '5': 1,
      },
      {
        '0': 1,
        '1': 1,
        '2': 1,
        '3': 1,
        '4': 3,
        '5': 1,
      },
      {
        '0': 5,
        '1': 5,
        '2': 6,
        '3': 4,
        '4': 2,
        '5': 1,
      },
      {
        '0': 3,
        '1': 8,
        '2': 9,
        '3': 5,
        '4': 4,
        '5': 1,
      },
    ],
  },
  {
    currentTable: [
      {
        '0': 0,
        '1': 1,
        '2': 3,
        '3': 4,
        '4': 5,
        '5': 7,
      },
      {
        '0': 7,
        '1': 0,
        '2': 2,
        '3': 2,
        '4': 0,
        '5': 3,
      },
      {
        '0': 2,
        '1': 5,
        '2': 7,
        '3': 1,
        '4': 0,
        '5': 0,
      },
      {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 2,
        '5': 0,
      },
      {
        '0': 4,
        '1': 4,
        '2': 5,
        '3': 3,
        '4': 1,
        '5': 0,
      },
      {
        '0': 2,
        '1': 7,
        '2': 8,
        '3': 4,
        '4': 3,
        '5': 0,
      },
    ],
    koenigAlgorithm: [
      {
        selectedIndependentZeros: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 1,
          },
          {
            x: 4,
            y: 2,
          },
          {
            x: 2,
            y: 3,
          },
          {
            x: 5,
            y: 4,
          },
        ],
        reachedRows: [5],
        targetColumns: [3],
        verifiedLines: {
          rows: [],
          columns: [],
        },
        columnToRowMarks: {},
      },
      {
        selectedIndependentZeros: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 1,
          },
          {
            x: 4,
            y: 2,
          },
          {
            x: 2,
            y: 3,
          },
          {
            x: 5,
            y: 4,
          },
        ],
        reachedRows: [4],
        targetColumns: [3],
        verifiedLines: {
          rows: [5],
          columns: [5],
        },
        columnToRowMarks: {
          '5': 5,
        },
      },
      {
        selectedIndependentZeros: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 1,
          },
          {
            x: 4,
            y: 2,
          },
          {
            x: 2,
            y: 3,
          },
          {
            x: 5,
            y: 4,
          },
        ],
        reachedRows: [],
        targetColumns: [3],
        verifiedLines: {
          rows: [5, 4],
          columns: [5],
        },
        columnToRowMarks: {
          '5': 5,
        },
        strikeThroughs: {
          rows: [0, 1, 2, 3],
          columns: [5],
        },
      },
    ],
    transformation: {
      outputTable: [
        {
          '0': 0,
          '1': 1,
          '2': 3,
          '3': 4,
          '4': 5,
          '5': 8,
        },
        {
          '0': 7,
          '1': 0,
          '2': 2,
          '3': 2,
          '4': 0,
          '5': 4,
        },
        {
          '0': 2,
          '1': 5,
          '2': 7,
          '3': 1,
          '4': 0,
          '5': 1,
        },
        {
          '0': 0,
          '1': 0,
          '2': 0,
          '3': 0,
          '4': 2,
          '5': 1,
        },
        {
          '0': 3,
          '1': 3,
          '2': 4,
          '3': 2,
          '4': 0,
          '5': 0,
        },
        {
          '0': 1,
          '1': 6,
          '2': 7,
          '3': 3,
          '4': 2,
          '5': 0,
        },
      ],
      transformCells: [
        {
          x: 5,
          y: 0,
          value: 1,
        },
        {
          x: 5,
          y: 1,
          value: 1,
        },
        {
          x: 5,
          y: 2,
          value: 1,
        },
        {
          x: 5,
          y: 3,
          value: 1,
        },
        {
          x: 0,
          y: 4,
          value: -1,
        },
        {
          x: 1,
          y: 4,
          value: -1,
        },
        {
          x: 2,
          y: 4,
          value: -1,
        },
        {
          x: 3,
          y: 4,
          value: -1,
        },
        {
          x: 4,
          y: 4,
          value: -1,
        },
        {
          x: 0,
          y: 5,
          value: -1,
        },
        {
          x: 1,
          y: 5,
          value: -1,
        },
        {
          x: 2,
          y: 5,
          value: -1,
        },
        {
          x: 3,
          y: 5,
          value: -1,
        },
        {
          x: 4,
          y: 5,
          value: -1,
        },
      ],
      strikeThroughs: {
        rows: [0, 1, 2, 3],
        columns: [5],
      },
      epsilon: 1,
    },
  },
  {
    currentTable: [
      {
        '0': 0,
        '1': 1,
        '2': 3,
        '3': 4,
        '4': 5,
        '5': 8,
      },
      {
        '0': 7,
        '1': 0,
        '2': 2,
        '3': 2,
        '4': 0,
        '5': 4,
      },
      {
        '0': 2,
        '1': 5,
        '2': 7,
        '3': 1,
        '4': 0,
        '5': 1,
      },
      {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 2,
        '5': 1,
      },
      {
        '0': 3,
        '1': 3,
        '2': 4,
        '3': 2,
        '4': 0,
        '5': 0,
      },
      {
        '0': 1,
        '1': 6,
        '2': 7,
        '3': 3,
        '4': 2,
        '5': 0,
      },
    ],
    koenigAlgorithm: [
      {
        selectedIndependentZeros: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 1,
          },
          {
            x: 4,
            y: 2,
          },
          {
            x: 2,
            y: 3,
          },
          {
            x: 5,
            y: 4,
          },
        ],
        reachedRows: [5],
        targetColumns: [3],
        verifiedLines: {
          rows: [],
          columns: [],
        },
        columnToRowMarks: {},
      },
      {
        selectedIndependentZeros: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 1,
          },
          {
            x: 4,
            y: 2,
          },
          {
            x: 2,
            y: 3,
          },
          {
            x: 5,
            y: 4,
          },
        ],
        reachedRows: [4],
        targetColumns: [3],
        verifiedLines: {
          rows: [5],
          columns: [5],
        },
        columnToRowMarks: {
          '5': 5,
        },
      },
      {
        selectedIndependentZeros: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 1,
          },
          {
            x: 4,
            y: 2,
          },
          {
            x: 2,
            y: 3,
          },
          {
            x: 5,
            y: 4,
          },
        ],
        reachedRows: [2],
        targetColumns: [3],
        verifiedLines: {
          rows: [5, 4],
          columns: [5, 4],
        },
        columnToRowMarks: {
          '4': 4,
          '5': 5,
        },
      },
      {
        selectedIndependentZeros: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 1,
          },
          {
            x: 4,
            y: 2,
          },
          {
            x: 2,
            y: 3,
          },
          {
            x: 5,
            y: 4,
          },
        ],
        reachedRows: [],
        targetColumns: [3],
        verifiedLines: {
          rows: [5, 4, 2],
          columns: [5, 4],
        },
        columnToRowMarks: {
          '4': 4,
          '5': 5,
        },
        strikeThroughs: {
          rows: [0, 1, 3],
          columns: [4, 5],
        },
      },
    ],
    transformation: {
      outputTable: [
        {
          '0': 0,
          '1': 1,
          '2': 3,
          '3': 4,
          '4': 6,
          '5': 9,
        },
        {
          '0': 7,
          '1': 0,
          '2': 2,
          '3': 2,
          '4': 1,
          '5': 5,
        },
        {
          '0': 1,
          '1': 4,
          '2': 6,
          '3': 0,
          '4': 0,
          '5': 1,
        },
        {
          '0': 0,
          '1': 0,
          '2': 0,
          '3': 0,
          '4': 3,
          '5': 2,
        },
        {
          '0': 2,
          '1': 2,
          '2': 3,
          '3': 1,
          '4': 0,
          '5': 0,
        },
        {
          '0': 0,
          '1': 5,
          '2': 6,
          '3': 2,
          '4': 2,
          '5': 0,
        },
      ],
      transformCells: [
        {
          x: 4,
          y: 0,
          value: 1,
        },
        {
          x: 5,
          y: 0,
          value: 1,
        },
        {
          x: 4,
          y: 1,
          value: 1,
        },
        {
          x: 5,
          y: 1,
          value: 1,
        },
        {
          x: 0,
          y: 2,
          value: -1,
        },
        {
          x: 1,
          y: 2,
          value: -1,
        },
        {
          x: 2,
          y: 2,
          value: -1,
        },
        {
          x: 3,
          y: 2,
          value: -1,
        },
        {
          x: 4,
          y: 3,
          value: 1,
        },
        {
          x: 5,
          y: 3,
          value: 1,
        },
        {
          x: 0,
          y: 4,
          value: -1,
        },
        {
          x: 1,
          y: 4,
          value: -1,
        },
        {
          x: 2,
          y: 4,
          value: -1,
        },
        {
          x: 3,
          y: 4,
          value: -1,
        },
        {
          x: 0,
          y: 5,
          value: -1,
        },
        {
          x: 1,
          y: 5,
          value: -1,
        },
        {
          x: 2,
          y: 5,
          value: -1,
        },
        {
          x: 3,
          y: 5,
          value: -1,
        },
      ],
      strikeThroughs: {
        rows: [0, 1, 3],
        columns: [4, 5],
      },
      epsilon: 1,
    },
  },
  {
    currentTable: [
      {
        '0': 0,
        '1': 1,
        '2': 3,
        '3': 4,
        '4': 6,
        '5': 9,
      },
      {
        '0': 7,
        '1': 0,
        '2': 2,
        '3': 2,
        '4': 1,
        '5': 5,
      },
      {
        '0': 1,
        '1': 4,
        '2': 6,
        '3': 0,
        '4': 0,
        '5': 1,
      },
      {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 3,
        '5': 2,
      },
      {
        '0': 2,
        '1': 2,
        '2': 3,
        '3': 1,
        '4': 0,
        '5': 0,
      },
      {
        '0': 0,
        '1': 5,
        '2': 6,
        '3': 2,
        '4': 2,
        '5': 0,
      },
    ],
    koenigAlgorithm: [
      {
        selectedIndependentZeros: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 1,
          },
          {
            x: 3,
            y: 2,
          },
          {
            x: 2,
            y: 3,
          },
          {
            x: 4,
            y: 4,
          },
          {
            x: 5,
            y: 5,
          },
        ],
      },
    ],
  },
];

export const assignmentProblemResponseWithHeuristic1: HungarianMethodResponse = [
  {
    reduce: {
      reduce: [
        {
          '0': 0,
          '1': 1,
          '2': 3,
          '3': 4,
          '4': 5,
          '5': 8,
        },
        {
          '0': 7,
          '1': 0,
          '2': 2,
          '3': 2,
          '4': 0,
          '5': 4,
        },
        {
          '0': 2,
          '1': 5,
          '2': 7,
          '3': 1,
          '4': 0,
          '5': 1,
        },
        {
          '0': 0,
          '1': 0,
          '2': 0,
          '3': 0,
          '4': 2,
          '5': 1,
        },
        {
          '0': 3,
          '1': 3,
          '2': 4,
          '3': 2,
          '4': 0,
          '5': 0,
        },
        {
          '0': 1,
          '1': 6,
          '2': 7,
          '3': 3,
          '4': 2,
          '5': 0,
        },
      ],
    },
    currentTable: [
      {
        '0': 0,
        '1': 1,
        '2': 3,
        '3': 4,
        '4': 5,
        '5': 8,
      },
      {
        '0': 7,
        '1': 0,
        '2': 2,
        '3': 2,
        '4': 0,
        '5': 4,
      },
      {
        '0': 2,
        '1': 5,
        '2': 7,
        '3': 1,
        '4': 0,
        '5': 1,
      },
      {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 2,
        '5': 1,
      },
      {
        '0': 3,
        '1': 3,
        '2': 4,
        '3': 2,
        '4': 0,
        '5': 0,
      },
      {
        '0': 1,
        '1': 6,
        '2': 7,
        '3': 3,
        '4': 2,
        '5': 0,
      },
    ],
  },
  {
    currentTable: [
      {
        '0': 0,
        '1': 1,
        '2': 3,
        '3': 4,
        '4': 5,
        '5': 8,
      },
      {
        '0': 7,
        '1': 0,
        '2': 2,
        '3': 2,
        '4': 0,
        '5': 4,
      },
      {
        '0': 2,
        '1': 5,
        '2': 7,
        '3': 1,
        '4': 0,
        '5': 1,
      },
      {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 2,
        '5': 1,
      },
      {
        '0': 3,
        '1': 3,
        '2': 4,
        '3': 2,
        '4': 0,
        '5': 0,
      },
      {
        '0': 1,
        '1': 6,
        '2': 7,
        '3': 3,
        '4': 2,
        '5': 0,
      },
    ],
    koenigAlgorithm: [
      {
        selectedIndependentZeros: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 4,
            y: 2,
          },
          {
            x: 1,
            y: 1,
          },
          {
            x: 5,
            y: 4,
          },
          {
            x: 2,
            y: 3,
          },
        ],
        reachedRows: [5],
        targetColumns: [3],
        verifiedLines: {
          rows: [],
          columns: [],
        },
        columnToRowMarks: {},
      },
      {
        selectedIndependentZeros: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 4,
            y: 2,
          },
          {
            x: 1,
            y: 1,
          },
          {
            x: 5,
            y: 4,
          },
          {
            x: 2,
            y: 3,
          },
        ],
        reachedRows: [4],
        targetColumns: [3],
        verifiedLines: {
          rows: [5],
          columns: [5],
        },
        columnToRowMarks: {
          '5': 5,
        },
      },
      {
        selectedIndependentZeros: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 4,
            y: 2,
          },
          {
            x: 1,
            y: 1,
          },
          {
            x: 5,
            y: 4,
          },
          {
            x: 2,
            y: 3,
          },
        ],
        reachedRows: [2],
        targetColumns: [3],
        verifiedLines: {
          rows: [5, 4],
          columns: [5, 4],
        },
        columnToRowMarks: {
          '4': 4,
          '5': 5,
        },
      },
      {
        selectedIndependentZeros: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 4,
            y: 2,
          },
          {
            x: 1,
            y: 1,
          },
          {
            x: 5,
            y: 4,
          },
          {
            x: 2,
            y: 3,
          },
        ],
        reachedRows: [],
        targetColumns: [3],
        verifiedLines: {
          rows: [5, 4, 2],
          columns: [5, 4],
        },
        columnToRowMarks: {
          '4': 4,
          '5': 5,
        },
        strikeThroughs: {
          rows: [0, 1, 3],
          columns: [4, 5],
        },
      },
    ],
    transformation: {
      outputTable: [
        {
          '0': 0,
          '1': 1,
          '2': 3,
          '3': 4,
          '4': 6,
          '5': 9,
        },
        {
          '0': 7,
          '1': 0,
          '2': 2,
          '3': 2,
          '4': 1,
          '5': 5,
        },
        {
          '0': 1,
          '1': 4,
          '2': 6,
          '3': 0,
          '4': 0,
          '5': 1,
        },
        {
          '0': 0,
          '1': 0,
          '2': 0,
          '3': 0,
          '4': 3,
          '5': 2,
        },
        {
          '0': 2,
          '1': 2,
          '2': 3,
          '3': 1,
          '4': 0,
          '5': 0,
        },
        {
          '0': 0,
          '1': 5,
          '2': 6,
          '3': 2,
          '4': 2,
          '5': 0,
        },
      ],
      transformCells: [
        {
          x: 4,
          y: 0,
          value: 1,
        },
        {
          x: 5,
          y: 0,
          value: 1,
        },
        {
          x: 4,
          y: 1,
          value: 1,
        },
        {
          x: 5,
          y: 1,
          value: 1,
        },
        {
          x: 0,
          y: 2,
          value: -1,
        },
        {
          x: 1,
          y: 2,
          value: -1,
        },
        {
          x: 2,
          y: 2,
          value: -1,
        },
        {
          x: 3,
          y: 2,
          value: -1,
        },
        {
          x: 4,
          y: 3,
          value: 1,
        },
        {
          x: 5,
          y: 3,
          value: 1,
        },
        {
          x: 0,
          y: 4,
          value: -1,
        },
        {
          x: 1,
          y: 4,
          value: -1,
        },
        {
          x: 2,
          y: 4,
          value: -1,
        },
        {
          x: 3,
          y: 4,
          value: -1,
        },
        {
          x: 0,
          y: 5,
          value: -1,
        },
        {
          x: 1,
          y: 5,
          value: -1,
        },
        {
          x: 2,
          y: 5,
          value: -1,
        },
        {
          x: 3,
          y: 5,
          value: -1,
        },
      ],
      strikeThroughs: {
        rows: [0, 1, 3],
        columns: [4, 5],
      },
      epsilon: 1,
    },
  },
  {
    currentTable: [
      {
        '0': 0,
        '1': 1,
        '2': 3,
        '3': 4,
        '4': 6,
        '5': 9,
      },
      {
        '0': 7,
        '1': 0,
        '2': 2,
        '3': 2,
        '4': 1,
        '5': 5,
      },
      {
        '0': 1,
        '1': 4,
        '2': 6,
        '3': 0,
        '4': 0,
        '5': 1,
      },
      {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 3,
        '5': 2,
      },
      {
        '0': 2,
        '1': 2,
        '2': 3,
        '3': 1,
        '4': 0,
        '5': 0,
      },
      {
        '0': 0,
        '1': 5,
        '2': 6,
        '3': 2,
        '4': 2,
        '5': 0,
      },
    ],
    koenigAlgorithm: [
      {
        selectedIndependentZeros: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 1,
          },
          {
            x: 5,
            y: 5,
          },
          {
            x: 4,
            y: 4,
          },
          {
            x: 3,
            y: 2,
          },
          {
            x: 2,
            y: 3,
          },
        ],
      },
    ],
  },
];

export const assignmentProblemResponseWithHeuristic2: HungarianMethodResponse = [
  {
    reduce: {
      reduce: [
        {
          '0': 0,
          '1': 1,
          '2': 3,
          '3': 4,
          '4': 5,
          '5': 7,
        },
        {
          '0': 7,
          '1': 0,
          '2': 2,
          '3': 2,
          '4': 0,
          '5': 3,
        },
        {
          '0': 2,
          '1': 5,
          '2': 7,
          '3': 1,
          '4': 0,
          '5': 0,
        },
        {
          '0': 0,
          '1': 0,
          '2': 0,
          '3': 0,
          '4': 2,
          '5': 0,
        },
        {
          '0': 4,
          '1': 4,
          '2': 5,
          '3': 3,
          '4': 1,
          '5': 0,
        },
        {
          '0': 2,
          '1': 7,
          '2': 8,
          '3': 4,
          '4': 3,
          '5': 0,
        },
      ],
    },
    currentTable: [
      {
        '0': 1,
        '1': 2,
        '2': 4,
        '3': 5,
        '4': 6,
        '5': 8,
      },
      {
        '0': 9,
        '1': 2,
        '2': 4,
        '3': 4,
        '4': 2,
        '5': 5,
      },
      {
        '0': 3,
        '1': 6,
        '2': 8,
        '3': 2,
        '4': 1,
        '5': 1,
      },
      {
        '0': 1,
        '1': 1,
        '2': 1,
        '3': 1,
        '4': 3,
        '5': 1,
      },
      {
        '0': 5,
        '1': 5,
        '2': 6,
        '3': 4,
        '4': 2,
        '5': 1,
      },
      {
        '0': 3,
        '1': 8,
        '2': 9,
        '3': 5,
        '4': 4,
        '5': 1,
      },
    ],
  },
  {
    currentTable: [
      {
        '0': 0,
        '1': 1,
        '2': 3,
        '3': 4,
        '4': 5,
        '5': 7,
      },
      {
        '0': 7,
        '1': 0,
        '2': 2,
        '3': 2,
        '4': 0,
        '5': 3,
      },
      {
        '0': 2,
        '1': 5,
        '2': 7,
        '3': 1,
        '4': 0,
        '5': 0,
      },
      {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 2,
        '5': 0,
      },
      {
        '0': 4,
        '1': 4,
        '2': 5,
        '3': 3,
        '4': 1,
        '5': 0,
      },
      {
        '0': 2,
        '1': 7,
        '2': 8,
        '3': 4,
        '4': 3,
        '5': 0,
      },
    ],
    koenigAlgorithm: [
      {
        selectedIndependentZeros: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 5,
            y: 4,
          },
          {
            x: 4,
            y: 2,
          },
          {
            x: 1,
            y: 1,
          },
          {
            x: 2,
            y: 3,
          },
        ],
        reachedRows: [5],
        targetColumns: [3],
        verifiedLines: {
          rows: [],
          columns: [],
        },
        columnToRowMarks: {},
      },
      {
        selectedIndependentZeros: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 5,
            y: 4,
          },
          {
            x: 4,
            y: 2,
          },
          {
            x: 1,
            y: 1,
          },
          {
            x: 2,
            y: 3,
          },
        ],
        reachedRows: [4],
        targetColumns: [3],
        verifiedLines: {
          rows: [5],
          columns: [5],
        },
        columnToRowMarks: {
          '5': 5,
        },
      },
      {
        selectedIndependentZeros: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 5,
            y: 4,
          },
          {
            x: 4,
            y: 2,
          },
          {
            x: 1,
            y: 1,
          },
          {
            x: 2,
            y: 3,
          },
        ],
        reachedRows: [],
        targetColumns: [3],
        verifiedLines: {
          rows: [5, 4],
          columns: [5],
        },
        columnToRowMarks: {
          '5': 5,
        },
        strikeThroughs: {
          rows: [0, 1, 2, 3],
          columns: [5],
        },
      },
    ],
    transformation: {
      outputTable: [
        {
          '0': 0,
          '1': 1,
          '2': 3,
          '3': 4,
          '4': 5,
          '5': 8,
        },
        {
          '0': 7,
          '1': 0,
          '2': 2,
          '3': 2,
          '4': 0,
          '5': 4,
        },
        {
          '0': 2,
          '1': 5,
          '2': 7,
          '3': 1,
          '4': 0,
          '5': 1,
        },
        {
          '0': 0,
          '1': 0,
          '2': 0,
          '3': 0,
          '4': 2,
          '5': 1,
        },
        {
          '0': 3,
          '1': 3,
          '2': 4,
          '3': 2,
          '4': 0,
          '5': 0,
        },
        {
          '0': 1,
          '1': 6,
          '2': 7,
          '3': 3,
          '4': 2,
          '5': 0,
        },
      ],
      transformCells: [
        {
          x: 5,
          y: 0,
          value: 1,
        },
        {
          x: 5,
          y: 1,
          value: 1,
        },
        {
          x: 5,
          y: 2,
          value: 1,
        },
        {
          x: 5,
          y: 3,
          value: 1,
        },
        {
          x: 0,
          y: 4,
          value: -1,
        },
        {
          x: 1,
          y: 4,
          value: -1,
        },
        {
          x: 2,
          y: 4,
          value: -1,
        },
        {
          x: 3,
          y: 4,
          value: -1,
        },
        {
          x: 4,
          y: 4,
          value: -1,
        },
        {
          x: 0,
          y: 5,
          value: -1,
        },
        {
          x: 1,
          y: 5,
          value: -1,
        },
        {
          x: 2,
          y: 5,
          value: -1,
        },
        {
          x: 3,
          y: 5,
          value: -1,
        },
        {
          x: 4,
          y: 5,
          value: -1,
        },
      ],
      strikeThroughs: {
        rows: [0, 1, 2, 3],
        columns: [5],
      },
      epsilon: 1,
    },
  },
  {
    currentTable: [
      {
        '0': 0,
        '1': 1,
        '2': 3,
        '3': 4,
        '4': 5,
        '5': 8,
      },
      {
        '0': 7,
        '1': 0,
        '2': 2,
        '3': 2,
        '4': 0,
        '5': 4,
      },
      {
        '0': 2,
        '1': 5,
        '2': 7,
        '3': 1,
        '4': 0,
        '5': 1,
      },
      {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 2,
        '5': 1,
      },
      {
        '0': 3,
        '1': 3,
        '2': 4,
        '3': 2,
        '4': 0,
        '5': 0,
      },
      {
        '0': 1,
        '1': 6,
        '2': 7,
        '3': 3,
        '4': 2,
        '5': 0,
      },
    ],
    koenigAlgorithm: [
      {
        selectedIndependentZeros: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 4,
            y: 2,
          },
          {
            x: 1,
            y: 1,
          },
          {
            x: 5,
            y: 4,
          },
          {
            x: 2,
            y: 3,
          },
        ],
        reachedRows: [5],
        targetColumns: [3],
        verifiedLines: {
          rows: [],
          columns: [],
        },
        columnToRowMarks: {},
      },
      {
        selectedIndependentZeros: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 4,
            y: 2,
          },
          {
            x: 1,
            y: 1,
          },
          {
            x: 5,
            y: 4,
          },
          {
            x: 2,
            y: 3,
          },
        ],
        reachedRows: [4],
        targetColumns: [3],
        verifiedLines: {
          rows: [5],
          columns: [5],
        },
        columnToRowMarks: {
          '5': 5,
        },
      },
      {
        selectedIndependentZeros: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 4,
            y: 2,
          },
          {
            x: 1,
            y: 1,
          },
          {
            x: 5,
            y: 4,
          },
          {
            x: 2,
            y: 3,
          },
        ],
        reachedRows: [2],
        targetColumns: [3],
        verifiedLines: {
          rows: [5, 4],
          columns: [5, 4],
        },
        columnToRowMarks: {
          '4': 4,
          '5': 5,
        },
      },
      {
        selectedIndependentZeros: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 4,
            y: 2,
          },
          {
            x: 1,
            y: 1,
          },
          {
            x: 5,
            y: 4,
          },
          {
            x: 2,
            y: 3,
          },
        ],
        reachedRows: [],
        targetColumns: [3],
        verifiedLines: {
          rows: [5, 4, 2],
          columns: [5, 4],
        },
        columnToRowMarks: {
          '4': 4,
          '5': 5,
        },
        strikeThroughs: {
          rows: [0, 1, 3],
          columns: [4, 5],
        },
      },
    ],
    transformation: {
      outputTable: [
        {
          '0': 0,
          '1': 1,
          '2': 3,
          '3': 4,
          '4': 6,
          '5': 9,
        },
        {
          '0': 7,
          '1': 0,
          '2': 2,
          '3': 2,
          '4': 1,
          '5': 5,
        },
        {
          '0': 1,
          '1': 4,
          '2': 6,
          '3': 0,
          '4': 0,
          '5': 1,
        },
        {
          '0': 0,
          '1': 0,
          '2': 0,
          '3': 0,
          '4': 3,
          '5': 2,
        },
        {
          '0': 2,
          '1': 2,
          '2': 3,
          '3': 1,
          '4': 0,
          '5': 0,
        },
        {
          '0': 0,
          '1': 5,
          '2': 6,
          '3': 2,
          '4': 2,
          '5': 0,
        },
      ],
      transformCells: [
        {
          x: 4,
          y: 0,
          value: 1,
        },
        {
          x: 5,
          y: 0,
          value: 1,
        },
        {
          x: 4,
          y: 1,
          value: 1,
        },
        {
          x: 5,
          y: 1,
          value: 1,
        },
        {
          x: 0,
          y: 2,
          value: -1,
        },
        {
          x: 1,
          y: 2,
          value: -1,
        },
        {
          x: 2,
          y: 2,
          value: -1,
        },
        {
          x: 3,
          y: 2,
          value: -1,
        },
        {
          x: 4,
          y: 3,
          value: 1,
        },
        {
          x: 5,
          y: 3,
          value: 1,
        },
        {
          x: 0,
          y: 4,
          value: -1,
        },
        {
          x: 1,
          y: 4,
          value: -1,
        },
        {
          x: 2,
          y: 4,
          value: -1,
        },
        {
          x: 3,
          y: 4,
          value: -1,
        },
        {
          x: 0,
          y: 5,
          value: -1,
        },
        {
          x: 1,
          y: 5,
          value: -1,
        },
        {
          x: 2,
          y: 5,
          value: -1,
        },
        {
          x: 3,
          y: 5,
          value: -1,
        },
      ],
      strikeThroughs: {
        rows: [0, 1, 3],
        columns: [4, 5],
      },
      epsilon: 1,
    },
  },
  {
    currentTable: [
      {
        '0': 0,
        '1': 1,
        '2': 3,
        '3': 4,
        '4': 6,
        '5': 9,
      },
      {
        '0': 7,
        '1': 0,
        '2': 2,
        '3': 2,
        '4': 1,
        '5': 5,
      },
      {
        '0': 1,
        '1': 4,
        '2': 6,
        '3': 0,
        '4': 0,
        '5': 1,
      },
      {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 3,
        '5': 2,
      },
      {
        '0': 2,
        '1': 2,
        '2': 3,
        '3': 1,
        '4': 0,
        '5': 0,
      },
      {
        '0': 0,
        '1': 5,
        '2': 6,
        '3': 2,
        '4': 2,
        '5': 0,
      },
    ],
    koenigAlgorithm: [
      {
        selectedIndependentZeros: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 1,
            y: 1,
          },
          {
            x: 5,
            y: 5,
          },
          {
            x: 4,
            y: 4,
          },
          {
            x: 3,
            y: 2,
          },
          {
            x: 2,
            y: 3,
          },
        ],
      },
    ],
  },
];

export const assignmentProblemResponseMaximumType1: HungarianMethodResponse = [
  {
    reduce: {
      reduce: [
        {
          '0': 8,
          '1': 6,
          '2': 5,
          '3': 2,
          '4': 3,
          '5': 0,
        },
        {
          '0': 0,
          '1': 6,
          '2': 5,
          '3': 3,
          '4': 7,
          '5': 3,
        },
        {
          '0': 5,
          '1': 1,
          '2': 0,
          '3': 4,
          '4': 7,
          '5': 6,
        },
        {
          '0': 2,
          '1': 1,
          '2': 2,
          '3': 0,
          '4': 0,
          '5': 1,
        },
        {
          '0': 1,
          '1': 0,
          '2': 0,
          '3': 0,
          '4': 4,
          '5': 4,
        },
        {
          '0': 6,
          '1': 0,
          '2': 0,
          '3': 2,
          '4': 5,
          '5': 7,
        },
      ],
      maxToMinTransformation: [
        {
          '0': 8,
          '1': 7,
          '2': 5,
          '3': 4,
          '4': 3,
          '5': 0,
        },
        {
          '0': 1,
          '1': 8,
          '2': 6,
          '3': 6,
          '4': 8,
          '5': 4,
        },
        {
          '0': 6,
          '1': 3,
          '2': 1,
          '3': 7,
          '4': 8,
          '5': 7,
        },
        {
          '0': 8,
          '1': 8,
          '2': 8,
          '3': 8,
          '4': 6,
          '5': 7,
        },
        {
          '0': 5,
          '1': 5,
          '2': 4,
          '3': 6,
          '4': 8,
          '5': 8,
        },
        {
          '0': 7,
          '1': 2,
          '2': 1,
          '3': 5,
          '4': 6,
          '5': 8,
        },
      ],
    },
    currentTable: [
      {
        '0': 0,
        '1': 1,
        '2': 3,
        '3': 4,
        '4': 5,
        '5': 8,
      },
      {
        '0': 7,
        '1': 0,
        '2': 2,
        '3': 2,
        '4': 0,
        '5': 4,
      },
      {
        '0': 2,
        '1': 5,
        '2': 7,
        '3': 1,
        '4': 0,
        '5': 1,
      },
      {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 2,
        '5': 1,
      },
      {
        '0': 3,
        '1': 3,
        '2': 4,
        '3': 2,
        '4': 0,
        '5': 0,
      },
      {
        '0': 1,
        '1': 6,
        '2': 7,
        '3': 3,
        '4': 2,
        '5': 0,
      },
    ],
  },
  {
    currentTable: [
      {
        '0': 8,
        '1': 6,
        '2': 5,
        '3': 2,
        '4': 3,
        '5': 0,
      },
      {
        '0': 0,
        '1': 6,
        '2': 5,
        '3': 3,
        '4': 7,
        '5': 3,
      },
      {
        '0': 5,
        '1': 1,
        '2': 0,
        '3': 4,
        '4': 7,
        '5': 6,
      },
      {
        '0': 2,
        '1': 1,
        '2': 2,
        '3': 0,
        '4': 0,
        '5': 1,
      },
      {
        '0': 1,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 4,
        '5': 4,
      },
      {
        '0': 6,
        '1': 0,
        '2': 0,
        '3': 2,
        '4': 5,
        '5': 7,
      },
    ],
    koenigAlgorithm: [
      {
        selectedIndependentZeros: [
          {
            x: 5,
            y: 0,
          },
          {
            x: 0,
            y: 1,
          },
          {
            x: 2,
            y: 2,
          },
          {
            x: 3,
            y: 3,
          },
          {
            x: 1,
            y: 4,
          },
        ],
        reachedRows: [5],
        targetColumns: [4],
        verifiedLines: {
          rows: [],
          columns: [],
        },
        columnToRowMarks: {},
      },
      {
        selectedIndependentZeros: [
          {
            x: 5,
            y: 0,
          },
          {
            x: 0,
            y: 1,
          },
          {
            x: 2,
            y: 2,
          },
          {
            x: 3,
            y: 3,
          },
          {
            x: 1,
            y: 4,
          },
        ],
        reachedRows: [2, 4],
        targetColumns: [4],
        verifiedLines: {
          rows: [5],
          columns: [2, 1],
        },
        columnToRowMarks: {
          '1': 5,
          '2': 5,
        },
      },
      {
        selectedIndependentZeros: [
          {
            x: 5,
            y: 0,
          },
          {
            x: 0,
            y: 1,
          },
          {
            x: 2,
            y: 2,
          },
          {
            x: 3,
            y: 3,
          },
          {
            x: 1,
            y: 4,
          },
        ],
        reachedRows: [3],
        targetColumns: [4],
        verifiedLines: {
          rows: [5, 2, 4],
          columns: [2, 1, 3],
        },
        columnToRowMarks: {
          '1': 5,
          '2': 5,
          '3': 4,
        },
      },
      {
        selectedIndependentZeros: [
          {
            x: 5,
            y: 0,
          },
          {
            x: 0,
            y: 1,
          },
          {
            x: 2,
            y: 2,
          },
          {
            x: 4,
            y: 3,
          },
          {
            x: 3,
            y: 4,
          },
          {
            x: 1,
            y: 5,
          },
        ],
      },
    ],
  },
];

export const assignmentProblemResponseMaximumType2: HungarianMethodResponse = [
  {
    reduce: {
      reduce: [
        {
          '0': 7,
          '1': 5,
          '2': 4,
          '3': 1,
          '4': 2,
          '5': 0,
        },
        {
          '0': 0,
          '1': 6,
          '2': 5,
          '3': 3,
          '4': 7,
          '5': 4,
        },
        {
          '0': 5,
          '1': 1,
          '2': 0,
          '3': 4,
          '4': 7,
          '5': 7,
        },
        {
          '0': 2,
          '1': 1,
          '2': 2,
          '3': 0,
          '4': 0,
          '5': 2,
        },
        {
          '0': 1,
          '1': 0,
          '2': 0,
          '3': 0,
          '4': 4,
          '5': 5,
        },
        {
          '0': 6,
          '1': 0,
          '2': 0,
          '3': 2,
          '4': 5,
          '5': 8,
        },
      ],
      maxToMinTransformation: [
        {
          '0': 8,
          '1': 7,
          '2': 5,
          '3': 4,
          '4': 3,
          '5': 1,
        },
        {
          '0': 0,
          '1': 7,
          '2': 5,
          '3': 5,
          '4': 7,
          '5': 4,
        },
        {
          '0': 6,
          '1': 3,
          '2': 1,
          '3': 7,
          '4': 8,
          '5': 8,
        },
        {
          '0': 8,
          '1': 8,
          '2': 8,
          '3': 8,
          '4': 6,
          '5': 8,
        },
        {
          '0': 4,
          '1': 4,
          '2': 3,
          '3': 5,
          '4': 7,
          '5': 8,
        },
        {
          '0': 6,
          '1': 1,
          '2': 0,
          '3': 4,
          '4': 5,
          '5': 8,
        },
      ],
    },
    currentTable: [
      {
        '0': 1,
        '1': 2,
        '2': 4,
        '3': 5,
        '4': 6,
        '5': 8,
      },
      {
        '0': 9,
        '1': 2,
        '2': 4,
        '3': 4,
        '4': 2,
        '5': 5,
      },
      {
        '0': 3,
        '1': 6,
        '2': 8,
        '3': 2,
        '4': 1,
        '5': 1,
      },
      {
        '0': 1,
        '1': 1,
        '2': 1,
        '3': 1,
        '4': 3,
        '5': 1,
      },
      {
        '0': 5,
        '1': 5,
        '2': 6,
        '3': 4,
        '4': 2,
        '5': 1,
      },
      {
        '0': 3,
        '1': 8,
        '2': 9,
        '3': 5,
        '4': 4,
        '5': 1,
      },
    ],
  },
  {
    currentTable: [
      {
        '0': 7,
        '1': 5,
        '2': 4,
        '3': 1,
        '4': 2,
        '5': 0,
      },
      {
        '0': 0,
        '1': 6,
        '2': 5,
        '3': 3,
        '4': 7,
        '5': 4,
      },
      {
        '0': 5,
        '1': 1,
        '2': 0,
        '3': 4,
        '4': 7,
        '5': 7,
      },
      {
        '0': 2,
        '1': 1,
        '2': 2,
        '3': 0,
        '4': 0,
        '5': 2,
      },
      {
        '0': 1,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 4,
        '5': 5,
      },
      {
        '0': 6,
        '1': 0,
        '2': 0,
        '3': 2,
        '4': 5,
        '5': 8,
      },
    ],
    koenigAlgorithm: [
      {
        selectedIndependentZeros: [
          {
            x: 5,
            y: 0,
          },
          {
            x: 0,
            y: 1,
          },
          {
            x: 2,
            y: 2,
          },
          {
            x: 3,
            y: 3,
          },
          {
            x: 1,
            y: 4,
          },
        ],
        reachedRows: [5],
        targetColumns: [4],
        verifiedLines: {
          rows: [],
          columns: [],
        },
        columnToRowMarks: {},
      },
      {
        selectedIndependentZeros: [
          {
            x: 5,
            y: 0,
          },
          {
            x: 0,
            y: 1,
          },
          {
            x: 2,
            y: 2,
          },
          {
            x: 3,
            y: 3,
          },
          {
            x: 1,
            y: 4,
          },
        ],
        reachedRows: [2, 4],
        targetColumns: [4],
        verifiedLines: {
          rows: [5],
          columns: [2, 1],
        },
        columnToRowMarks: {
          '1': 5,
          '2': 5,
        },
      },
      {
        selectedIndependentZeros: [
          {
            x: 5,
            y: 0,
          },
          {
            x: 0,
            y: 1,
          },
          {
            x: 2,
            y: 2,
          },
          {
            x: 3,
            y: 3,
          },
          {
            x: 1,
            y: 4,
          },
        ],
        reachedRows: [3],
        targetColumns: [4],
        verifiedLines: {
          rows: [5, 2, 4],
          columns: [2, 1, 3],
        },
        columnToRowMarks: {
          '1': 5,
          '2': 5,
          '3': 4,
        },
      },
      {
        selectedIndependentZeros: [
          {
            x: 5,
            y: 0,
          },
          {
            x: 0,
            y: 1,
          },
          {
            x: 2,
            y: 2,
          },
          {
            x: 4,
            y: 3,
          },
          {
            x: 3,
            y: 4,
          },
          {
            x: 1,
            y: 5,
          },
        ],
      },
    ],
  },
];
