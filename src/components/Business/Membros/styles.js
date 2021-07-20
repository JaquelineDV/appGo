import { makeStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
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
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '50%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  btn: {
    marginInline: theme.spacing(20),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
    color: theme.palette.getContrastText(purple[500]),
  }
}));

export { useStyles };