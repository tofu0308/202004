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
    return {
      ...state,
      inputValue: state.inputValue * 10 + action.number,
      showingResult: false
    };
  } else if (action.type === PLUS) {
    return {
      ...state,
      inputValue: 0,
      resultValue:  state.resultValue + state.inputValue,
      showingResult: true
    };
  } else {
    return state;
  }
};

export default caluculator;