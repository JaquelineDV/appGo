import { useStyles } from './styles'
import { Card, CardContent, Typography, CardMedia, Grid, Container, Paper } from '@material-ui/core';

import { useHistory } from 'react-router-dom';


export default function SimpleCard() {
  const classes = useStyles();
  const history = useHistory();
  

  const redirectMenu = (url) => {
    history.push(url);
  }

  return (
    <Grid >
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h2" variant="h4" align="left" color="textPrimary" gutterBottom>
            Negócios
          </Typography>
        </Container>
      </div>
      <Paper className={classes.box}>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
              <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.cardItem} onClick={() => redirectMenu("/negocios/cadastro")}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     Adicionar um negócio
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card} onClick={() => redirectMenu("/negocios/description")}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={
                      "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
                    }
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     Gooway LTDA
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
          </Grid>
        </Container>
      </Paper>
    </Grid>
  );
}
