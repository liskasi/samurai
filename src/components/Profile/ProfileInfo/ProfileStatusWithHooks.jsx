import React, { useState, useEffect } from 'react';
import classes from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {
    // let [editMode, setEditMode] = useState(false);
    // let [status, setStatus] = useState(props.status);

    const [state, setState] = useState({
        editMode: false,
        status: props.status
    })

    useEffect(() => {
        debugger
        setState({ ...state, status: props.status });
    }, [props.status]);

    const activateEditMode = () => {
        setState({ ...state, editMode: true });
    }

    const deactivateEditMode = () => {
        debugger
        setState({ ...state, editMode: false });
        props.updateStatus(state.status);
    }

    const onStatusChange = (e) => {
        setState({ ...state, status: e.currentTarget.value });
    }

    return (
        <div>
            {!state.editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "------"}</span>
                </div>
            }
            {state.editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={state.status} />
                </div>
            }
        </div>
    );

}

export default ProfileStatusWithHooks;