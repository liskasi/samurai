import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.posts
    .map(posts => <Post message={posts.message} likesCount={posts.likesCount} />
    );

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  }

  return (
    <div>
      My posts
      <div>
        <textarea ref={newPostElement}></textarea>
        <button onClick={addPost}>Add post</button>
        <button>Cancel</button>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;