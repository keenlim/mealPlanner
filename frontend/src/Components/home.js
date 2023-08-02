import React from 'react';
import {useState, useEffect} from 'react';
import axios from "axios";

const Home = () => {
    
    const [data, setData] = useState([]);

    const getData = () => {
        //alert("HELLO World")
        axios.get("http://localhost:5000/generateMeal", {
            crossdomain: true
        }).then(response => {
            setData(response.data);
        });

        console.log(data);
    }
    return(
        <div className = "position-relative">
            <h1 className="text-center pt-4">Meal Generator</h1>

            <div className="alert alert-info text-center" role="alert">
                Always wondering about your daily meals? Fret not, we got you covered. 
                Simply click on the generate meals button and we will provide you with ideas on what to cook!
            </div>

            <div className =  "position-absolute start-50 translate-middle mt-4 pt-5">
                <button type="button" className="btn btn-primary btn-lg" onClick = {getData}>Meals Generator</button>
            </div>

            <div>
            {data.map(items => 
                <div>
                   <div className="card" style={{width: "18rem"}}>
                        <img src="../frontend/src/FoodImages/3-ingredient-tomato-soup.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">{items.Name}</p>
                        </div>
                    </div>
                </div>)}

            </div>
            
            
        </div>
        
    )
}

export default Home;