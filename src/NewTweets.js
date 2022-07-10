import React, {useState} from 'react';
import axios from 'axios';
import {v4  as uuidv4} from 'uuid';


export default function NewTweets() {
    const [tweetText, setTweetText] = useState('');

    function postTweet() {
        if(tweetText.length > 0) {
            const newTweetObj = {
                id: uuidv4(),
                title: tweetText,
                author: 'Stutern'
            }
            axios.post('http://localhost:3000/tweets', newTweetObj)
            setTweetText('');
        }else {
            alert('Please enter text to tweet')
        }
    }

    return (
        <div>
            <br></br>
            <textarea id="input" className="post-text-area" placeholder='write something ...' value={tweetText} onChange={(e) => setTweetText(e.target.value)} />
            <br></br>
            <button id="post-button" className="post-btn" onClick={()=> postTweet()}>
                Post New Tweet
            </button>
        </div>
    )
}