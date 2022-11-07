import React from 'react'
import APIKEY from '../info';
import { useState } from 'react';

var myHeaders = new Headers();
myHeaders.append("apikey", APIKEY);


const Sentimain = () => {

    const [tag, setTag] = useState("positive");
    const [conf, setConf] = useState("99.1");

    const sentiAnalysis = () => {
        var text = document.getElementById('inputText').value
        if(text){
            var raw = document.getElementById('inputText').value;
        }
        else{
            raw = ""
        }
        var requestOptions = {
            method: 'POST',
            redirect: 'follow',
            headers: myHeaders,
            body: raw
        };
    
        fetch("https://api.apilayer.com/sentiment/analysis", requestOptions)
            .then(response => response.json())
            .then(response => {
                setTag(response.sentiment);
                console.log(response.sentiment);
                setConf(response.confidence);
            })
            .catch(error => console.log('error', error));
    
    }


    return (
        <div className='container'>
            <div className='mainpart'>
                <div className="text-center">
                    <h5>Test with your own text</h5>
                    <div className="row">
                        <div className="col">
                            <textarea type="text" id="inputText" rows="8" cols="50" placeholder='Enter your text to analyze!'></textarea>
                            <button type="button" className="btn" onClick={sentiAnalysis}>Analyze Text</button>
                        </div>
                        <div className="col">
                            <h6 id='results'>Results</h6>
                            <div className="resDiv">
                                <div className='heading'>
                                    <p className='headp'>TAG</p>
                                    <p className='headp'>CONFIDENCE</p>
                                </div>
                                <hr />
                                <div className="heading">
                                    <p className='resp'>{tag}</p>
                                    <p className='resp' id='percentage'>{conf}%</p>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sentimain
