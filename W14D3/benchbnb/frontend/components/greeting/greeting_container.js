import { connect } from 'react-redux';
import Greeting from './greeting';
import { logoutUser } from '../../actions/session_actions';

const mapStateToProps = ({ entities, session }) => {
    return {
        currentUser: entities.users[session.id]
    }
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logoutUser())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Greeting);