import { makeStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  text: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    textAlign: 'left',
    paddingBottom: theme.spacing(3),
  },
  btn: {
    paddingBottom: theme.spacing(5),
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  
  },
 
}));

export { useStyles};