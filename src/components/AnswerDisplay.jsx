import "../components/ad.css";
import up from "../components/up.png";
import down from "../components/down.png";
import profile from "../components/profile.png";
import ReactPlayer from 'react-player';

export default function QuestionAnswer( props ){
    return(
        <div className="answer">
            <div className="card border-light mb-3">
                <div className="profimage">
                    <img src={profile} style={{width:"30px", height:"30px"}} alt="" />
                    <p className="card-text">Username</p>
                </div>
                    <ReactPlayer url={process.env.REACT_APP_S3_BASE_PATH + props.url} controls={true}/>
                <div className="reflect">
                    <img src={up} style={{width:"15px", height:"15px"}} alt="" />
                    <img src={down} style={{width:"15px", height:"15px"}} alt="" />
                </div>
            </div>
        </div>
    );
};