import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
//import { addPostActionCreator, updateNewPostTextActionCreator } from "./../../../redux/profile-reducer";

const MyPosts = (props) => {
  let postsElements = props.posts.map((posts) => (
    <Post message={posts.message} likesCount={posts.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    //props.dispatch(updateNewPostTextActionCreator(text));
    //console.log(text);
  };

  return (
    <div>
      My posts
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        ></textarea>
        <button onClick={onAddPost}>Add post</button>
        <button>Cancel</button>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
