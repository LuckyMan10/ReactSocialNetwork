import './App.css';
import Header from './components/Header/Header';
import Main_left from './components/main_left/main_left';
import Main_right from './components/main_right/main_right';
import Main_right_Container from './components/main_right/main_right_container';
import Messages from './components/Messages/Messages';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import Messages_container from './components/Messages/Messages_container';
import Main_left_container from './components/main_left/main_left_container';

function App(props) {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="App__wrapper">
      <Header />
      <Main_left_container/>
      <div className="App__wrapper__content">
      <Route path="/Profile" render={ () => <Main_right_Container /> } />
      <Route path="/Messages" render={ () => <Messages_container /> } />
      <Redirect to="/Profile" />
      </div>
      </div>
    </div>
    </BrowserRouter>
  );
  
}

export default App;
