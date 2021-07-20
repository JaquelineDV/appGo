import { makeStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
  paper: {
    paddingTop: theme.spacing(9),
    paddingBottom: theme.spacing(3),
    paddingInline: theme.spacing(50),
    
  },
  text: {
    paddingInline: theme.spacing(70),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
    color: theme.palette.getContrastText(purple[500]),
  },
  cardGrid: {
    paddingTop: theme.spacing(9),
    paddingBottom: theme.spacing(8),
    width: 700,
    transition: "0.3s",
    margin: "auto",
  },
  card: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(8),
    marginLeft: theme.spacing(2),
    transition: "0.3s",
    width: 200,
    height: 100,
    margin: "auto",
  },
  cardMedia: {
    paddingTop: '50%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
    textAlign: 'center',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  btn: {
    marginLeft: theme.spacing(33),
    padding: theme.spacing(1),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
    color: theme.palette.getContrastText(purple[500]),
  }
}));

export { useStyles };