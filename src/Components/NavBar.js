import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {AppBar, Toolbar, IconButton,  MenuItem, Menu, Button } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";



export default function NavBar() {
  
  return (
    <div >
      
      <AppBar position="static">
        <Toolbar className="nav-container ">
          <IconButton edge="start" color="inherit" aria-label="menu"className="icon-button" >
            <MenuIcon />

            <Button color = "inherit" component ={Link} to="/login"> Login </Button>
            <Button color = "inherit" component ={Link} to="/signup"> Signup </Button>
            <Button color = "inherit" component ={Link} to="/"> Home </Button>
            <Button color = "inherit" component ={Link} to="/profile"> Profile </Button>
          </IconButton>
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
              </IconButton>
              <Menu
                id="menu-appbar"

                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
