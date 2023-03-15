export default function QuestionAnswer(){
    return(
        <div>
            <div className="form-group">
                <label for="exampleInputPassword1" className="form-label mt-4">Description</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="What did hitler look like in the eye of the german people?"/>
            </div>

            
            <fieldset className="form-group">
                <legend className="mt-4">Radio buttons</legend>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="optionsRadios" style={{ display: 'inline-block' }}/>
                    <label className="form-check-label" style={{ display: 'inline-block' }}>
                    Video
                    </label>
                    <br />
                    <input className="form-check-input" type="radio" name="optionsRadios" style={{ display: 'inline-block' }}/>
                    <label className="form-check-label" style={{ display: 'inline-block' }}>
                    Audio
                    </label>
                </div>
            </fieldset>

            <h3 className="card-header">Card header</h3>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <h6 className="card-subtitle text-muted">Support card subtitle</h6>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="d-block user-select-none" width="100%" height="200" aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" style={{fontSize:'1.125rem',textAnchor:'middle'}}>
                <rect width="100%" height="100%" fill="#868e96"></rect>
                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
            </svg>
        </div>
    );
}