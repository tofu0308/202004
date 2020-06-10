// actionTypes
const INPUT_NUMBER = 'INPUT_NUMBER';
const PLUS = 'PLUS';

const initialAppState = {
  inputValue: 0,
  resultValue: 0,
  showingResult: false
};

const caluculator = ( state = initialAppState, action) => {
  if (action.type === INPUT_NUMBER) {

  } else if (action.type === PLUS) {

  } else {
    return state;
  }
};

export default caluculator;