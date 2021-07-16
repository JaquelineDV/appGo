import React from 'react';
import { useStyles } from './styles';
import { Card, CardHeader, IconButton, Avatar } from '@material-ui/core';
import FavoriteIcon from "@material-ui/icons/Favorite";


export default function ListVagas() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            :)
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <FavoriteIcon />
          </IconButton>
        }
        title="CardHeader Example"
        subheader="A flexbox with avatar, title, subtitle and action"
      />
    </Card>
  );
}