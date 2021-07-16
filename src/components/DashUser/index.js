import { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const DashboardUser = ({dispatch, userState}) => {

  return (
    <>
     Olá, {' '+ userState.userLogged.name}
    </>
  )
}


DashboardUser.propTypes = {
  dispatch : PropTypes.func,
  userState : PropTypes.object,
}

const mapStateToProps = state => ({
  users: state.users,
  alert: state.alerts,
  userState : state.user,
});

export default connect(mapStateToProps)(memo(DashboardUser));