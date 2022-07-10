import React, {useState} from "react";
import axios from "axios";
import './App.css';

export default function EditTweet({id})  {
    const [editText, setEditedText] = useState('');
    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
      // 👇️ toggle isActive state on click
      setIsActive(current => !current);
    };

    function repost() {
    
            const newTweetText = {
                title: editText
            }
            axios.patch(`http://localhost:3000/tweets/${id}`, newTweetText);
            setEditedText('');
            setIsActive(false);
        }

    return (
        <div className="edit-section">
            <textarea className={isActive ? 'edit-text-area' : 'hide'} stype="text" placeholder="write your editted tweet here and repost..." value={editText} onChange={(e) => setEditedText(e.target.value)}/>
            <div className="edit-repost-btns">
                <button id="edit-button" className="edit-btn" onClick={handleClick}>Edit</button>
                <button id="repost-button" className="repost-btn" onClick={()=>repost()}>Repost</button>
            </div>
        </div>
    )
}