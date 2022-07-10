import React, {useState, useEffect} from 'react';
import NewTweets from './NewTweets';
import Tweets from './Tweets';
import axios from 'axios';

function TweetApp() {
    const [tweets, setTweets] = useState([]);

    function getTweets() {
        axios.get('http://localhost:3000/tweets').then((res) => {
            setTweets(res.data)
        });
    }

    useEffect(()=> {
        getTweets()
    }, [tweets]);

    return (
        <div className='app'>
            <h2>Tweeter</h2>
            <NewTweets />
            <Tweets tweets={tweets}/>
        </div>
    );
}

export default TweetApp;