import math from 'mathjs';

export const CREATE_GRID = 'CREATE_GRID';

export const createGrid = (xWidth, yWidth) => {
  const newArray = math.zeros(xWidth, yWidth);
  const action = {
    type: CREATE_GRID,
    xWidth,
    yWidth,
    grid: newArray,
  };
  return action;
};
