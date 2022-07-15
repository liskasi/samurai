import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts
    .map(posts => <Post message={posts.message} likesCount={posts.likesCount} />
    );

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    console.log(text);
    props.updateNewPostText(text);
  }

  return (
    <div>
      My posts
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
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