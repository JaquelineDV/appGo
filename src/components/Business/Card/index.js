import { useStyles } from './styles'
import { Card, CardContent, Typography, CardMedia, Grid, Container, Paper} from '@material-ui/core';

import { useHistory } from 'react-router-dom';


export default function SimpleCard() {
  const classes = useStyles();
  const history = useHistory();


  const redirectMenu = (url) => {
    history.push(url);
  }

  return (
    <Container className={classes.box}>
      <Grid item variant="h1">
        <Typography className={classes.title} variant="h1" component="h2" color="textPrimary" gutterBottom>
          Negócios
        </Typography>
      </Grid>
      <Grid container spacing={4} justifyContent="center" >
        <Grid item  xs={12} sm={6} md={4}>
          <Paper className={classes.paper} />
          <Card className={classes.root} onClick={() => redirectMenu("/negocios/cadastro")}>
            <CardContent className={classes.Content} >
                <Typography gutterBottom variant="h5" component="h2" >
                  Adicionar um Negócio
                </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item  xs={12} sm={6} md={4}>
          <Card className={classes.root} onClick={() => redirectMenu("/negocios/membros")}>
            <CardMedia
              className={classes.media}
              title="Paella dish"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Gooway LTDA
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}