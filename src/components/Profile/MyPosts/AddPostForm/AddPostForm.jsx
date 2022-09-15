import React from 'react';
import { Field, reduxForm } from "redux-form";
import { Textarea } from '../../../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../../../utils/validators/validators';

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textarea} placeholder={"Post message"}
                    validate={[required, maxLength10]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'profile-add-post' })(AddPostForm);