import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if(!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      {/* <div className={classes.image}>
        <img src='./content-img.jpg' alt='Main Content' />
      </div> */}
      <div>
        <img src={props.profile.photos.large} />
        <ProfileStatus status="Hello,my friends!" />
      </div>
    </div>
  );
}

export default ProfileInfo;