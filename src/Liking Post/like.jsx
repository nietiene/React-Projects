import React, { useState } from "react";

const posts = [
    {id:1, content: "This is first post"},
    {id:2, content: "This is another post like"},
    {id:3, content: "React makes building UI easily"},
];

const SocialMedia = () => {
    const [likes, setLikes] = useState(posts.map(() => false)); // Track likes for each status
    const [likeCount, setLikeCount] = useState(posts.map(() => 0));
   
    const toggleLike = (index) => {
       const newLikes = [...likes];
       const newLikeCount = [...likeCount];

       if (newLikes[index]) {
        newLikes[index] = false;
        newLikeCount[index] -= 1;
       } else {
        // Not liked Like it
        newLikes[index] = true;
        newLikeCount[index] += 1
       }
       setLikes(newLikes);
       setLikeCount(newLikeCount);
    }
    
    return (
        <div>
            <h1>Social Media Post</h1>
            {posts.map((posts, index) => (
              <div key={index}>
                <p>{posts.content}</p>
                <button onClick={() => toggleLike(index)}
                style={{ backgroundColor: likes[index] ? 'green' : 'gray'}}>
                    {likes[index] ? '❤️ Liked' : ' 🤍 Like'} {likeCount[index]}
                </button>
              </div>
            ))}
        </div>
    )
}

export default SocialMedia