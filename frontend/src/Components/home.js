import React from 'react';
import {useState, useEffect} from 'react';

const home = () => {
    const [data, setData] = useState([]);
    const handleClick = () => {
        alert('Button have been clicked');

    }
    return(
        <div className = "position-relative">
            <h1 className="text-center pt-4">Meal Generator</h1>

            <div className="alert alert-info text-center" role="alert">
                Always wondering about your daily meals? Fret not, we got you covered. 
                Simply click on the generate meals button and we will provide you with ideas on what to cook!
            </div>

            <div className =  "position-absolute start-50 translate-middle mt-4 pt-5">
                <button type="button" className="btn btn-primary btn-lg" onClick = {handleClick}>Meals Generator</button>
            </div>
            
        </div>
        
    )
}

export default home;