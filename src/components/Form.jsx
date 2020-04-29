import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [word, setWord] = useState('');
    const [synonyms, setSynonyms] = useState([]);

    const getSynonyms = (e) => {
        e.preventDefault();
        axios({
            "method":"GET",
            "url":"https://webknox-words.p.rapidapi.com/words/"+word+"/synonyms",
            "headers":{
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"webknox-words.p.rapidapi.com",
                "x-rapidapi-key":"3038c2322amshbd28049ff1cb4b3p14dc77jsn0dd7720e19e9"
            }
        })
        .then(response => response.data)
        .then(data => {
            setSynonyms(data)
        })
    }

    const handleChange = (e) => {
        setWord(e.target.value)
    }


    return(
        <div>
            {word ? word : ''}
            {synonyms ? synonyms.map(item => 
                <ul>
                    <li>{item}</li>
                </ul>
            ) : 'No result'}

            <form>
                <input type="text" name="word" onChange={handleChange}/>
                <br/>
                <input type="submit" value="Submit" onClick={getSynonyms}/>
            </form>
        </div>
    )
}

export default Form;