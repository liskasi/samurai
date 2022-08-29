import React from 'react';
import Profile from './Profile';
import { setUserProfile } from "../../redux/profile-reducer";
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from './withRouter';

class ProfileContainer extends React.Component {
    componentDidMount() {
        //let userId = this.props.params.userId;
        let userId = this.props.params.userId ? this.props.params.userId : '2';
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/profile/` + userId
            )
            .then((response) => {
                this.props.setUserProfile(response.data);
            });

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

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);