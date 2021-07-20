import { makeStyles }from '@material-ui/core';

export const useStyles = makeStyles(( theme ) => ({
  box: {
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: 'center',
    marginTop: theme.spacing(10),
    width: '700px',
    height: '500px',
    color: theme.palette.text.secondary,
    boxShadow: '1px 25px 45px 2px rgb(0, 0, 0,0.1)',
  }
}));

