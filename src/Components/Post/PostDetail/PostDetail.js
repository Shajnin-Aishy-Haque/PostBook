import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PostDetail.css';
import Comments from '../../comments/Comments';

const PostDetail = () => {
    const { id } = useParams();

    const [post, setPost] = useState({});
    const { userId, title, body } = post;
    //console.log(title);


    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))

    }, [])

    const [comments,setComments]=useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComments(data))

    }, [])
    //console.log(comments.length);


    return (
        <div className="post-detail">
            <div className="post-box">
                <h3>{title}</h3>
                <p>{body}</p>
            </div>

            <div className="comments">
                <h3>Comments</h3>
                {
                    comments.map(comment=><Comments comment={comment}></Comments>)
                        
                }
            </div>
        </div>
    );
};

export default PostDetail;