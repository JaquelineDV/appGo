import { makeStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  divBtn: {
    textAlign: 'center',
  },
  btn: {
    margin: theme.spacing(1),
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
    minWidth: 80,
    maxWidth: 60,
  },
 
}));

export { useStyles};