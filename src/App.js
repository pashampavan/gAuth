import logo from './logo.svg';
import { useEffect } from 'react';
import {gapi} from 'gapi-script'
import './App.css';
import LoginButton from './components/Login'
import LogoutButton from './components/Logout'
const clientId="1039864307791-bv17oa1mkq81o1caunbe3cph1j3l5bfs.apps.googleusercontent.com";
function App() {
  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId:clientId,
        scope:""
      })
    }
    gapi.load('client:auth2',start);
  });
  return (
    <div className="App">
      <LoginButton/>
      <LogoutButton/>
    </div>
  );
}

export default App;
