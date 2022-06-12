import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div className={classes.image}>
        <img src='./content-img.jpg' alt='Main Content' />
      </div>
      <div>
        ava + desc
      </div>
    </div>
  );
}

export default ProfileInfo;