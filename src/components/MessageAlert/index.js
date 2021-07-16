import React, { memo } from 'react';
import {
  Collapse,
  IconButton,
} from '@material-ui/core';
import { alertClean } from 'src/store/actions/alertActions';
import { Alert } from '@material-ui/lab';
import { connect } from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';

import PropTypes from 'prop-types';


const MessageAlert = ({ alertState, dispatch, placeParam }) => {

  // Verifica se o local da mensagem é o solicitado
  // place é o parametro do component
  // alert.place é o local que a menagem deve aparecer
  // Os campos são Arrays de Strings, com o nome dos lugares.. A lista esta no reducer do alert
  const showPlace = () => {

    let havePlace = false;

    // Verifica se os lugares foram informados no component e na mensagem
    if (alertState && alertState.places && placeParam ){

      console.log (" PARM " , placeParam)

      alertState.places.map(alPl => {

        const haveP = placeParam.indexOf(alPl) > -1;

        if (haveP ){
          havePlace = true;
        }

        return null;
      })
    }

    return havePlace

  }

  return (
   
    <div id="messageAlert">
       { console.log( " findedUser" , alertState.message !== '' && showPlace())}
      <Collapse in={alertState.message !== '' && showPlace() }>
        <Alert
          severity={alertState.type}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                dispatch(alertClean());
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }>
          {alertState.message}
        </Alert>
      </Collapse>
    </div>
  )

}

MessageAlert.propTypes = {
  alertState: PropTypes.object,
  placeParam : PropTypes.string,
  dispatch: PropTypes.func,
}


const mapStateToProps = state => ({
  alertState: state.alert,
});


export default connect(mapStateToProps)(memo(MessageAlert));
