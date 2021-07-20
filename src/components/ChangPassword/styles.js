import { makeStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  box: {
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: 'center',
    marginTop: theme.spacing(10),
    marginInline: theme.spacing(70),
    width: '700px',
    height: '500px',
    color: theme.palette.text.secondary,
    boxShadow: '1px 25px 45px 2px rgb(0, 0, 0,0.1)',
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