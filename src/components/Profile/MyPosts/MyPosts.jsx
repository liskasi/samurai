import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import AddPostForm from "./AddPostForm/AddPostForm";

const MyPosts = (props) => {
  let postsElements = props.posts.map((posts) => (
    <Post message={posts.message} likesCount={posts.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div>
      My posts
      <AddPostForm onSubmit={onAddPost} />
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
