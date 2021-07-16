import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>({
  box: {
    marginTop: theme.spacing(0),
    background: '#fff',
    borderRadius: 10,
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(3),
    boxShadow: '1px 25px 45px 2px rgb(0, 0, 0,0.1)',
    width: theme.spacing(70),
    height: theme.spacing(70),
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    padding: theme.spacing(8, 0, 6),

  },
  root: {
    maxheight: 345,
    maxWidth: 345,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    
  },
  title: {
    fontSize: 14,
  },
  media: {
    height: 140,
    paddingTop: '20%',
  },
  cardContent: {
    flexGrow: 1,
    maxWidth: 345,
    
  },
  paper: {
    height: 140,
    width: 100,
  },
}));

export { useStyles };