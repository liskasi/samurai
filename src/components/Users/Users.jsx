import React from "react";
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';

let Users = (props) => {
  let getUsers = (props) => {
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          props.setUsers(response.data.items);
        });
    }
  }
  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      {props.users.map((u) => (
        <div key={u.id}>
          <div>
            <div>
              <img
                src={u.photos.small != null ? u.photos.small : userPhoto}
              // className={classes.userPhoto}
              />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Followed
                </button>
              )}
            </div>
          </div>
          <div>
            <div>
              <div>{u.name} aaa</div>
              <div>{u.status} nnn</div>
            </div>
            <div>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
