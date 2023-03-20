import "../components/Logincard.css";
import logo from '../components/logo1.png';
// import googleLogin from '../components/GoogleLogin.jpg';
import { GoogleLogin } from '@react-oauth/google';
import { getGoogleLogin, getUserData } from "../services/WorldsWisdomCore";
import { useNavigate } from "react-router-dom";

export default function Logincard (){
    const navigate = useNavigate();

    const handleLogin = async (googleData) => {
        const res = await getGoogleLogin(googleData.credential);
        const userId = res.response.sub;
        const email = res.response.email;
        sessionStorage.setItem("userId", userId);
        sessionStorage.setItem("email", email);
        const userData = await getUserData(userId);
        if (userData.user) {
            sessionStorage.setItem("userData", JSON.stringify(userData.user));
            navigate("/");
        } else {
            navigate("/register");
        }
        
    }

    return (
        <div className="card">
            <div className="card-body">
                <div><center><img src={logo} alt="Logo" className="mb-2" style={
                    {
                    width:'200px'
                    }}>
                    </img></center>
                </div>
                <h1 className="card-title" style={{textAlign:'center'}}>
                Welcome to WorldsWisdom
                </h1>
                <h4 style={{textAlign:'center'}}>
                        <br/>
                        Join a community<br/>
                        built on sharing<br/>
                        wisdom<br/>
                        <br/>   
                        Find and receive<br/>
                        wisdom from<br/>
                        anywhere
                        <br />
                </h4>
                <center>
                    <GoogleLogin
                    onSuccess={credentialResponse => {
                        handleLogin(credentialResponse);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                    className="mt-5"/>
                </center>
            </div>
        </div>
    );
}