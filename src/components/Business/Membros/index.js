import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { useStyles } from './styles';


const cards = [1, 2, 3, 4];

export default function ListMembros() {
  const classes = useStyles();

  return (
      <main>
        <Grid item xs={12} sm={6} className={classes.paper}>
              <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
                Membros
              </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button variant="contained" size="large" className={classes.heroButtons}>
            Membros
          </Button>
        </Grid>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h7" component="p">
                      Jhon Joe
                    </Typography>
                    <Typography variant="p" component="p">
                      Diretor
                    </Typography>
                    <Typography variant="p" component="p">
                      Ativado
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
            <Grid container spacing={2} justifyContent="center">
                <Grid item >
                  <Button variant="contained"  className={classes.btn} color="primary">
                    Voltar para Negócio
                  </Button>
                </Grid>
            </Grid>
          </Grid>
        </Container>
      </main>
  );
}