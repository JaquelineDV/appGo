import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>({
  box: {
    ...theme.typography.body2,
    padding: theme.spacing(10),
    textAlign: 'center',
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(3),
    width: '500px',
    height: '450px',
    color: theme.palette.text.secondary,
    boxShadow: '1px 25px 45px 2px rgb(0, 0, 0,0.1)',
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 2),
  },
  cardGrid: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(8),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(5),
    transition: "0.3s",
    width: 700,
    margin: "auto",
  },
  cardItem: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(8),
    marginLeft: theme.spacing(2),
    transition: "0.3s",
    width: 200,
    height: 100,
    margin: "auto",
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));

export { useStyles };