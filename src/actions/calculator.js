// actionTypes
const INPUT_NUMBER = 'INPUT_NUMBER';
const PLUS = 'PLUS';

export const onNumClick = (number) => ({
  type: INPUT_NUMBER,
  number
});

export const onPlusClick = () => ({
  type: PLUS,
});