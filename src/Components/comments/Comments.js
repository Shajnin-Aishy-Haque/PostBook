import React, { useState, useEffect } from 'react';
import './Comments.css'

const Comments = (props) => {
    const { name, body, email } = props.comment;
    //  console.log(name);

    const [img, setImg] = useState([]);
    useEffect(() => {
        const url = "https://randomuser.me/api/?results=1";
        fetch(url)
            .then(res => res.json())
            .then(data => setImg(data.results[0].picture))
    }, [])

    return (
        <div className="comment">
            <div style={{ display: "flex" }} >
                <img style={{ borderRadius: "50%", width: "50px" }} src={img.medium} alt="" />
               
                <p style={{ margin: '10px' }}><b>{name}</b></p>
            </div>
            <p><small>{email}</small></p>
            <p>{body}</p>
        </div>
    );
};

export default Comments;