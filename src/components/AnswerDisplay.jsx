import "../components/ad.css";
import up from "../components/up.png";
import down from "../components/down.png";
import profile from "../components/profile.png";

export default function QuestionAnswer(){
    return(
        <div className="answer">
            <div className="card border-light mb-3">
                <div>
                    <img classname="pfimage" src={profile} style={{width:"30px", height:"30px", display:"auto"}} alt="" />
                    <p className="card-text">Username</p>
                </div>
                <video width="" height="" controls >
                    <source src="" type="video/mp4"/>
                </video>
                <div className="reflect">
                    <img src={up} style={{width:"15px", height:"15px"}} alt="" />
                    <img src={down} style={{width:"15px", height:"15px"}} alt="" />
                </div>
            </div>
        </div>
    );
};