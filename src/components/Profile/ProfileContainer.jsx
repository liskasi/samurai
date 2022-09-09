import React from 'react';
import Profile from './Profile';
import { getUserProfile, updateStatus, getStatus } from "../../redux/profile-reducer";
import { connect } from 'react-redux';
import { withRouter } from './withRouter';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.params.userId ? this.props.params.userId : '25685';
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}
                status={this.props.status} updateStatus={this.props.updateStatus} />
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter)(ProfileContainer);