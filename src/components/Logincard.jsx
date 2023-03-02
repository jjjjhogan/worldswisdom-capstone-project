import "../components/Logincard.css";
import logo from '../components/logo1.png';
import googleLogin from '../components/GoogleLogin.jpg';

export default function Logincard (){
    return (
        <div className="card">
            <div className="card-body">
                <div><center><img src={logo} alt="Logo" style={
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
                <a href="https://www.google.com/">
                    <center><img src={googleLogin} alt="GoogleLogIn" /></center>
                </a>
            </div>
        </div>
    );
}