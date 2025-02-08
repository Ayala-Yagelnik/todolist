import React, { useEffect, useState } from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Container, Button, Menu, MenuItem, Link, Avatar } from "@mui/material";
import { Menu as MenuIcon, ListAlt as ListAltIcon } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import authService from "../services/authService";

const pages = [
  { title: "Tasks", route: "/toDoList"},
];

function AppHeader() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [loginUser, setLoginUser] = useState(null);

  useEffect(() => {
    setLoginUser(authService.getLoginUser());
  }, [location.key]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ListAltIcon sx={{ mr: 1 }} />
            ToDo List
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button key={page.title} color="inherit" onClick={() => navigate(page.route)}>
                {page.title}
              </Button>
            ))}
          </Box>
          {loginUser ? (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton onClick={handleOpenUserMenu} backgroundcolor='secondary.main'>
              <Avatar alt= 'User'/>
              </IconButton>
              <Menu
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={() => { authService.logout(); navigate('/'); }}>
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Button color="inherit" onClick={() => navigate('/login')}>
              Login
            </Button>
          )}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'flex', md: 'none' } }}
            onClick={handleOpenNavMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            {pages.map((page) => (
              <MenuItem key={page.title} onClick={() => { navigate(page.route); handleCloseNavMenu(); }}>
                {page.icon}
                {page.title}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default AppHeader;
