import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Navbar = () => {
    const { user, logOut } = useAuth();
    const theme = useTheme();

    const useStyle = makeStyles({
        navItem: {
            color: '#fff',
            textDecoration: 'none'
        },
        mobileNavItem: {
            color: '#000',
            textDecoration: 'none'
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'

            }
        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'

            }
        },
        navLogo: {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'right'

            }
        },

    });
    const { navItem, navIcon, navItemContainer, navLogo, mobileNavItem } = useStyle();

    const [state, setState] = useState(false);


    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>
                <ListItem button >
                    <ListItemText>
                        <Link className={mobileNavItem} to='/'>Home</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText>
                        <Link className={mobileNavItem} to='/appointment'>Appointment</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                {
                    user.email &&
                    <ListItem button >
                        <ListItemText>
                            <Link className={mobileNavItem} to='/dashboard'>Dashboard</Link>
                        </ListItemText>
                    </ListItem>
                }
                <Divider />
                {
                    user.email ?
                        <ListItem button >
                            <ListItemText>
                                <Button onClick={logOut} color="inherit">LogOut</Button>
                            </ListItemText>
                        </ListItem>
                        :
                        <ListItem button >
                            <ListItemText>
                                <Link className={mobileNavItem} to='/login'>Login</Link>
                            </ListItemText>
                        </ListItem>
                }

                <Divider />
            </List>
        </Box>
    );
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Doctor Portal
                        </Typography>

                        <Box className={navItemContainer}>
                            <Link className={navItem} to='/home'>
                                <Button color="inherit">Home</Button>
                            </Link>
                            <Link className={navItem} to='/appointment'>
                                <Button color="inherit">Appointment</Button>
                            </Link>
                            {
                                user.email &&
                                <Link className={navItem} to='/dashboard'>
                                    <Button color="inherit">Dashboard</Button>
                                </Link>
                            }
                            {
                                user.email ?
                                    <Button onClick={logOut} color="inherit">LogOut</Button>
                                    :
                                    <Link className={navItem} to='/login' >
                                        <Button color="inherit">Login</Button>
                                    </Link>
                            }
                        </Box>

                    </Toolbar>
                </AppBar>
            </Box>

            <div>

                <React.Fragment >
                    <Drawer

                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>

            </div>
        </>
    );
};

export default Navbar;