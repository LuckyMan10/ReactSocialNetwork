import './App.css';
import {Header} from './components/Header/Header';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import {MenuContainer} from './components/Menu/MenuContainer';
import {UsersContainer} from './components/Users/UsersContainer';
import {LoginContainer} from './components/login/loginContainer';
import {MusicContainer} from './components/Music/MusicContainer';
import React from 'react';
import {getAuthSession} from './reducer/auth-reducer';
import { connect } from 'react-redux';
import {compose} from 'redux'
import monke from './image/mokey.jpg';
import {MessageContainer} from './components/Messages/Messages_container';
import {ProfileContainer} from './components/profile/ProfileContainer';


const Monke_preload = (props) => {
  return (
    <div className="monke">

    </div>
  )
}

class AppComponent extends React.Component {
  
  componentDidMount() {
    this.props.getAuthSession()
    
  }
  
  render() {
    return (this.props.initialized === false && this.props.authorized === true) ? <Monke_preload /> : 
      (
      <BrowserRouter>
      <div className="App">
      <div className="App__wrapper">
      <Header />
      <MenuContainer/>
      <div className="App__wrapper__content">
      <Route path="/Profile/:userId?" render={ () => 
      <ProfileContainer />
       } />
      <Route path="/Messages" render={ () => 
      <MessageContainer />
       } />
      <Route path="/Users" render={ () => <UsersContainer />} />
      <Route path="/Login" render={ () => <LoginContainer />} />
      <Route path="/Music" render={ () => <MusicContainer />}/>
      <Redirect to ="/Profile"/>
      </div>
      </div>
      </div>
    </BrowserRouter>
    )
  
} 

  
}
const mapStateToProps = (state) => ({
  initialized: state.AuthReducer.initialized,
  isAuth: state.AuthReducer.isAuth,
  authorized: state.AuthReducer.authorized,
})

export const App = compose(
  connect(mapStateToProps, {getAuthSession}))(AppComponent);