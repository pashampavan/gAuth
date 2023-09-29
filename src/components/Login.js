import {GoogleLogin} from 'react-google-login';
const clientId="1039864307791-bv17oa1mkq81o1caunbe3cph1j3l5bfs.apps.googleusercontent.com"
export default function Login() {
    const onSuccess=(res)=>{
        console.log("Login Success! Current User:",res.profileobj);
    }
    const onFailure=(res)=>{
        console.log("Login Failed:",res);
    }
  return (
    <div id="signInButton">
        <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiedPolicy={"single_host_origin"}
        isSigneIn={true}
        uxMode="redirect"
        />
    </div>
  )
}
