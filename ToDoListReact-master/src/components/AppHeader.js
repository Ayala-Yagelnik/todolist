import React, { useEffect, useState } from "react";
import {  AppBar,  Box,  Toolbar,  IconButton,  Typography,Container,Menu,  Button,MenuItem,Link,} from "@mui/material";
import { Menu as MenuIcon, Home as HomeIcon, ListAlt as ListAltIcon, Login as LoginIcon, Logout as LogoutIcon } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import authService from "../services/authService";

const pages = [
    { title: "Tasks", route: "/toDoList", icon: <ListAltIcon /> },
];

function AppHeader() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const navigate = useNavigate();
    const location = useLocation();

    const [loginUser, setLoginUser] = useState(null);
    useEffect(() => {
        setLoginUser(authService.getLoginUser());
    }, [location.key]);

    return (
        <AppBar sx={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
            <Container maxWidth={false}>
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        ToDo List
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                                    <Link style={{ textDecoration: "none" }} href={page.route}>
                                        <Typography textAlign="center">{page.title}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        ToDo List
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        {pages.map((page) => (
                            <Link key={page.title} style={{ textDecoration: "none", marginLeft: '30px' }} href={page.route}>
                                <Button
                                    key={page.title}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: "white", display: "block" }}
                                >
                                 {page.title}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    {loginUser ? (
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="body1" sx={{ mr: '10px' }}>
                                {loginUser.name}
                            </Typography>
                            <Button
                                 sx={{
                                    color:"white",
                                    backgroundColor:"black",
                               }}
                              
                                onClick={() => {
                                    authService.logout();
                                    navigate('/');
                                }}
                            >
                                LogOut
                            </Button>
                        </Box>
                    ) : (
                        <Button
                        sx={{
                             color:"white",
                             backgroundColor:"black",
                        }}
                       
                         
                            onClick={() => {
                                navigate('/login');
                            }}
                       
                        >
                            Login
                        </Button>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default AppHeader;

