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

    const getImageSRC = (Image_name) => {
        return "/FoodImages/" + Image_name + ".jpg"
    }


    return(
        <div className = "position-relative">
            <h1 className="text-center pt-4">Meal Generator</h1>

            <div className="alert alert-info text-center" role="alert">
                Always wondering about your daily meals? Fret not, we got you covered. 
                Simply click on the generate meals button and we will provide you with ideas on what to cook!
            </div>

            <div className =  "pt-2 d-flex justify-content-center">
                <button type="button" className="btn btn-primary btn-lg" onClick = {getData}>Meals Generator</button>
            </div>

                <div className = "container d-flex">
                    <div className = "row row-cols-1 row-cols-lg-5 row-cols-md-3 g-3 mt-5 mb-5">
                            {data.map(items => 
                            <div className = "col" >
                                <div className="card align-baseline">
                                    <img src = {getImageSRC(items.Image_name)} className="card-img-top" alt="food"/>
                                    <div className="card-body text-center">
                                        <p className="card-text">{items.Name}</p>
                                    </div>
                                </div>
                            </div>)}
                    </div>


            </div>
              
            
            
            
        </div>
        
    )
}

export default Home;