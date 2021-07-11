import Main_left from "./main_left";
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        friends_leftBlock__data: state.friends_leftBlock.friends_leftBlock__data,
    }
  }
//state.friends_leftBlock.friends_leftBlock__data
const Main_left_container = connect(mapStateToProps)(Main_left)
export default Main_left_container;