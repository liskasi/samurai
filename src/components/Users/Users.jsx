import React from "react";
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';

let Users = (props) => {
  // debugger
//   if (props.users.length === 0) {
//     props.setUsers([
//       {
//         id: 1,
//         fullname: "Elisaveta",
//         status: "Hillow",
//         location: { city: "Vyborg", country: "Russia" },
//         photoUrl:
//           "https://bestprofilepictures.com/wp-content/uploads/2020/07/Cool-Profile-Picture-For-Instagram-768x784.jpg",
//       },
//       {
//         id: 2,
//         fullname: "Maximka",
//         status: "I love Lisa",
//         location: { city: "Lensk", country: "Russia" },
//         followed: true,
//         photoUrl:
//           "https://bestprofilepictures.com/wp-content/uploads/2020/07/Cool-Profile-Picture-For-Instagram-768x784.jpg",
//       },
//       {
//         id: 3,
//         fullname: "Karlis",
//         status: "I am a Zakiiiiis",
//         location: { city: "Kuldiga", country: "Latvia" },
//         followed: false,
//         photoUrl:
//           "https://bestprofilepictures.com/wp-content/uploads/2020/07/Cool-Profile-Picture-For-Instagram-768x784.jpg",
//       },
//       {
//         id: 4,
//         fullname: "Arturss",
//         status: "I have covid",
//         location: { city: "Riga", country: "Latvia" },
//         followed: true,
//         photoUrl:
//           "https://bestprofilepictures.com/wp-content/uploads/2020/07/Cool-Profile-Picture-For-Instagram-768x784.jpg",
//       },
//     ]);
//   }
// debugger

let getUsers = () =>
{
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
