import { memo, useState } from 'react';
import PropTypes from 'prop-types';
import{ Grid, AppBar, Toolbar, Typography, IconButton, Avatar, Menu, MenuItem, Popover, Button}from "@material-ui/core";
import { useStyles } from './styles'
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { connect } from 'react-redux';

import { logout } from 'src/store/actions/';

import { useHistory } from 'react-router-dom';


const MenuBar = ({dispatch, userState}) => {
  const classes = useStyles();

  const history = useHistory();

  const [anchorEl, setAnchorEl]= useState(null);
  const [anchorElMenu, setAnchorElMenu]= useState(null);
  const [openPop, setOpenPop]= useState(false);
  

  const open = Boolean(anchorEl);
  const openMenu = Boolean(anchorElMenu);

  const id = openPop ? 'simple-popover' : undefined;

  const handleMenu = (event) => {
    setAnchorElMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElMenu(null);
  };

  const handleMenuAvatar = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseAvatar = () => {
    setAnchorEl(null);
  };

  const handleCloseLogout = () => {
    setAnchorEl(null);
    dispatch(logout());
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenPop(true);
  };

  const redirectMenu = (url) => {
    history.push(url);
  }


  const changeRenderNav = () => {

    if(userState.isLoggedIn){
      return (<>
         <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
          <Grid item>
            <IconButton color="inherit" onClick={handleMenu}>
              <AppsIcon color="secondary"/>
            </IconButton>
            <Menu
                id="menu"
                anchorEl={anchorElMenu}
                anchorOrigin={{
                  vertical: "center",
                  horizontal: "center"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={openMenu}
                onClose={handleCloseMenu}
                getContentAnchorEl={null}
              >
                <MenuItem onClick={() => redirectMenu("/atualizarPerfil")}>Perfil</MenuItem>
                <MenuItem onClick={() => redirectMenu('/negocios/id')} >Negócios</MenuItem>
                <MenuItem onClick={() => redirectMenu("/vagas")}>Vagas</MenuItem>
                <MenuItem onClick={() => redirectMenu('/membros')}>Membros</MenuItem>
              </Menu>
          </Grid>
          <Grid item>
            <IconButton onClick={handleMenuAvatar}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </IconButton>
            <Menu
                id="menu"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "center",
                  horizontal: "center"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={handleCloseAvatar}
                getContentAnchorEl={null}
            >
                <MenuItem onClick={handleCloseAvatar}>Perfil</MenuItem>
                <MenuItem onClick={handleClick} aria-describedby={id} >
                  Alterar Foto
                </MenuItem>
                <MenuItem onClick={handleCloseLogout}>Sair da minha conta</MenuItem>
            </Menu>
          </Grid>
        </Grid>  
        <Popover
          id={id}
          open={openPop}
          anchorEl={anchorEl}
          onClose={handleCloseAvatar}
          className={classes.Pop}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
              <div className={classes.btn2}>
                <Button variant="contained" color="primary" className={classes.margin}>
                  Carregar Foto
                </Button>
              </div>
            </Grid>
          </Grid>
        </Popover>
      </>)
    }  else {

      return (<>
        <Link to="/login" variant="button" color="textPrimary" className={classes.link}>
          Entrar
        </Link>
        <Link to="/register" variant="button" color="textPrimary" className={classes.link}>
          Registrar
        </Link>
      </>)
    }

  }

  return (
 
      <AppBar position="static" color="white" elevation={0}>
      
          <Toolbar >
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
            <Grid item>
              <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                Goowaay
              </Typography>
            </Grid>
            <Grid item>             
              <nav>
              {changeRenderNav()}
              </nav>
            </Grid>
          
            </Grid>
          </Toolbar>
      </AppBar>

  );
}

MenuBar.propTypes = {
  dispatch : PropTypes.func,
}

const mapStateToProps = state => ({
  users: state.users,
  alert: state.alerts,
  userState : state.user,
});

export default connect(mapStateToProps)(memo(MenuBar));