import React from "react";
import EditTweet from "./EditTweet";

export default function Tweets({tweets= []}) {
   
    return (
            <div className="tweets">
            {tweets.map((tweet) => {
                return<div className="tweet-section" key={tweet.id}>
                        <p id="display" className="tweet-title">
                        {tweet.title}
                        </p>
                    <i className="author">Posted by: {tweet.author}</i>
                    <EditTweet id={tweet.id}/>
                    </div>

            })}
            </div>
    )
}