export default function QuestionAnswer(){
    return(
        <div>
            <div class="form-group">
                <label for="exampleInputPassword1" class="form-label mt-4">Description</label>
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="What did hitler look like in the eye of the german people?"/>
            </div>

            
            <fieldset class="form-group">
                <legend class="mt-4">Radio buttons</legend>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="optionsRadios" style={{ display: 'inline-block' }}/>
                    <label class="form-check-label" style={{ display: 'inline-block' }}>
                    Video
                    </label>
                    <br />
                    <input class="form-check-input" type="radio" name="optionsRadios" style={{ display: 'inline-block' }}/>
                    <label class="form-check-label" style={{ display: 'inline-block' }}>
                    Audio
                    </label>
                </div>
            </fieldset>

            <h3 class="card-header">Card header</h3>
            <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <h6 class="card-subtitle text-muted">Support card subtitle</h6>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" class="d-block user-select-none" width="100%" height="200" aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" style={{fontSize:'1.125rem',textAnchor:'middle'}}>
                <rect width="100%" height="100%" fill="#868e96"></rect>
                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
            </svg>





     








        </div>
    );
}