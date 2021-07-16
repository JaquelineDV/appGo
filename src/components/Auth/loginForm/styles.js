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
    margin: theme.spacing(3, 0, 2),
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },

}));


export { useStyles };