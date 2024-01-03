import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Jokes(props) {

    
    const [joke, setJoke] = useState('');

    useEffect( ()=>{
        axios.get('https://icanhazdadjoke.com/', {headers: {Accept: 'application/json'}})
        .then(res => setJoke(res.data))
        .catch(err => console.log(err.data))
    }, []);

    const fetchJoke = () => {
        axios.get('https://icanhazdadjoke.com/', {headers: {Accept: 'application/json'}})
        .then(res => setJoke(res.data))
        .catch(err => console.log(err.data))
    };
    return (
        <div className='mt-4 w-50 mx-auto'>
            <div className="card">
                <div className="card-header">
                    Dad Joke 
                </div>
                <div className="card-body">
                    <p className="card-text">{joke.joke}</p>
                    <a href="#" className="btn btn-primary" onClick={fetchJoke}>Get Another Joke</a>
                </div>
            </div>
        </div>
    );
}

export default Jokes;