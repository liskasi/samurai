import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";

const MyPostsContainer = (props) => {
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  }

  return (
    <MyPosts 
      updateNewPostText={onPostChange}
      addPost={addPost}
      posts={store.profilePage.posts}
      newPostText={store.profilePage.newPostText}
    />
  );
}

export default MyPostsContainer;