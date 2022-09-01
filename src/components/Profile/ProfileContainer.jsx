import React from 'react';
import Profile from './Profile';
import { getUserProfile } from "../../redux/profile-reducer";
import { connect } from 'react-redux';
import { withRouter } from './withRouter';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.params.userId ? this.props.params.userId : '2';
        this.props.getUserProfile(userId);

    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})
 
export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);