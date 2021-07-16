import { makeStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
  paper: {
    display: 'block',
    minHeight: '100%',
    backgroundColor: '#fafafa00',

  },
  form: {
    marginTop: theme.spacing(1),
    background: '#fff',
    padding: theme.spacing(3),
    borderRadius: 10,
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 1),
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
    boxShadow: '1px 25px 45px 2px rgb(0, 0, 0,0.1)',
  },
  box: {
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: 'center',
    marginTop: theme.spacing(1),
    color: theme.palette.text.secondary,
    boxShadow: '1px 25px 45px 2px rgb(0, 0, 0,0.1)',
    maxWidth: '40%',
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(2),
    padding: theme.spacing(3),
    marginLeft: theme.spacing(32),
  },
  margin: {
    margin: theme.spacing(1),
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },

}));

export { useStyles };