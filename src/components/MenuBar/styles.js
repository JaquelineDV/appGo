import { makeStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(15, 3, 7),
  },
  btn: {
    margin: theme.spacing(3, 0, 2),
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,  
    borderRadius: 8,
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(10),
    padding: theme.spacing(5),
  },
  pop: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '300',

  },
  btn2: {
    textAlign: 'center',
    margin: theme.spacing(7),
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