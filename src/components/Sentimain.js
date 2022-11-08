import React from 'react'
import { useState } from 'react';

var myHeaders = new Headers();
myHeaders.append("apikey", process.env.REACT_APP_API_URL);


const Sentimain = () => {

    const [tag, setTag] = useState("positive");
    const [conf, setConf] = useState("99.1");
    const [loading, setLoading] = useState(false);

    const sentiAnalysis = () => {
        setLoading(true);
        var text = document.getElementById('inputText').value
        if (text) {
            var raw = document.getElementById('inputText').value;
        }
        else {
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
                setLoading(false);
                setTag(response.sentiment);
                setConf(response.confidence.toFixed(2));
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
                                {loading ? <div className="text-center">
                                    <div className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>: 
                                <div className="heading">
                                    <p className='resp'>{tag}</p>
                                    <p className='resp' id='percentage'>{conf}%</p>
                                </div>
                                }
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
