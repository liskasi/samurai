import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={classes.image}>
        <img src='./content-img.jpg' alt='Main Content' />
      </div>
      <div>
        <img src={props.profile.photos.large} />
        ava + desc
      </div>
    </div>
  );
}

export default ProfileInfo;