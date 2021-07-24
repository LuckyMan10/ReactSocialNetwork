import {Menu} from "./Menu";
import { connect } from 'react-redux';
import { logoutSession } from '../../reducer/auth-reducer';

let mapStateToProps = (state) => {
    return {
        friends_leftBlock__data: state.friends_leftBlock.friends_leftBlock__data,
        isAuth: state.AuthReducer.isAuth,
    }
  }

export const MenuContainer = connect(mapStateToProps, {
  logoutSession,
})(Menu)
