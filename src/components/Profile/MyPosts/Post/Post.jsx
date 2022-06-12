import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src='./000004.jpg' alt='Profile Pic' />
      <div>
        <p>{props.message}</p>
        <p>like {props.likesCount} </p>
      </div>
    </div>
  );
}

export default Post;