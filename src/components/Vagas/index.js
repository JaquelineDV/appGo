import {useState} from 'react';
import { Button, Card, CardContent, Grid, Typography, Container, 
  IconButton, InputAdornment, TextField} from '@material-ui/core';
import SearchIcon  from "@material-ui/icons/Search";
import { useStyles } from './styles';


const cards = [1, 2, 3, 4,5,6];

export default function ListVagas() {
  const classes = useStyles();

  const [value, setValue] = useState("");

  return (
      <main>
        <Grid item className={classes.paper}>
              <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
                Total de (37) vagas da "NOME DA EMPRESA"
              </Typography>
        </Grid>
        <Grid item className={classes.text}>
          <TextField
            type="search"
            label="Pesquisar por conexões"
            margin="normal"
            fullWidth
            variant="outlined"
            size="small"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                 <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Seringueiro
                    </Typography>
                    <Typography variant="p" component="p">
                      Àrea: Técnologia, TI.
                    </Typography>
                    <Typography variant="p" component="p">
                      Funções: Seringueiro, Peão.
                    </Typography>
                    <Typography variant="p" component="p">
                      Quantidade: 3 Vagas.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
            <Grid container spacing={3} justifyContent="center">
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