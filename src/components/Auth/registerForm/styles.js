import { makeStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
  form: {
    width: 'auto', // Fix IE 11 issue.
    marginTop: theme.spacing(0),
    background: '#fff',
    padding: theme.spacing(3),
    borderRadius: 10,
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
    boxShadow: '1px 25px 45px 2px rgb(0, 0, 0,0.1)',
  },

}));

export { useStyles };