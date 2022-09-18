import React from 'react';
import Profile from './Profile';
import { getUserProfile, updateStatus, getStatus } from "../../redux/profile-reducer";
import { connect } from 'react-redux';
import { withRouter } from './withRouter';
import { compose } from 'redux';
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.params.userId ? this.props.params.userId : this.props.authorizedUserId;
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus} />
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter)(ProfileContainer);