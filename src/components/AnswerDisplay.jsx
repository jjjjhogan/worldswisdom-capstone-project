import "../components/ad.css";
import up from "../components/up.png";
import down from "../components/down.png";
import profile from "../components/profile.png";
import ReactPlayer from 'react-player';

export default function AnswerDisplay({ answer, user }){
    return(
        <div className="bg-light border">
                <div className="profimage">
                    <img src={profile} style={{width:"30px", height:"30px"}} alt="" />
                    <p className="card-text">{user.userName}</p>
                </div>
                <div className="vid-player">
                    <ReactPlayer url={process.env.REACT_APP_S3_BASE_PATH + answer.videoKey} controls={true}/>
                </div>
                <div className="reflect">
                    <img src={up} style={{width:"25px", height:"25px"}} alt="" />
                    <img src={down} style={{width:"25px", height:"25px"}} alt="" />
                </div>
            </div>
    );
};