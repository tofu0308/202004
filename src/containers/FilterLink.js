import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/todo';
import Link from '../components/Link'

const mapStateToProps = (state, ownProps)=> {
  return {state: state}
}

const mapDispatchToProps = (dispatch, ownProps)=> {
  return {
    onClick: ()=> {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  }
}

const FilterLink = connect(mapStateToProps,mapDispatchToProps)(Link);

export default FilterLink;