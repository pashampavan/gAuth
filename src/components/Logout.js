import {GoogleLogout} from 'react-google-login';
const clientId="1039864307791-bv17oa1mkq81o1caunbe3cph1j3l5bfs.apps.googleusercontent.com"
export default function Logout() {
    const onSuccess=()=>{
        console.log("Logout Successfully!");
    }
  return (
    <div id="signOutButton">
        <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        />
    </div>
  )
}
