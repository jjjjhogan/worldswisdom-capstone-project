import './LoadingIndicator.css';
import { Spinner } from 'react-bootstrap';

export default function LoadingIndicator (props){
    const {loading} = props;
    if (!loading) return null;
    return (
        <div className="position-absolute top-0 left-0 w-100 h-100 spinner-overlay ">
            <div className="top-50 start-50 position-absolute" >
                <Spinner animation = "border" size = "lg" variant="primary"/>
            </div>
        </div>
    );
}