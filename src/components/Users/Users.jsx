import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { followAPI } from "../../api/api";

let Users = (props) => {
    let pagesCount = Math.ceil(
        props.totalUsersCount / props.pageSize
    );

    let pages = [];
    for (let i = 0; i < pagesCount; i++) {
        pages.push(i + 1);
    }

    return (
        <div>
            <div>
                {pages.map((p) => {
                    return (
                        <span
                            key={p}
                            className={props.currentPage === p ? styles.selectedPage : ""}
                            onClick={(e) => {
                                props.onPageChange(p);
                            }}
                        >
                            {" "}
                            {p}
                        </span>
                    );
                })}
            </div>
            {props.users.map((u) => (
                <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img
                                    src={u.photos.small != null ? u.photos.small : userPhoto}
                                    className={styles.userPhoto}
                                    alt=""
                                />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ? (
                                <button disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {
                                        props.unfollow(u.id)
                                    }}
                                >
                                    Unfollow
                                </button>
                            ) : (
                                <button disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {
                                        props.follow(u.id);
                                    }}
                                >
                                    Follow
                                </button>
                            )}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    );
}

export default Users;