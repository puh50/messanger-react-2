import React, {useContext} from 'react';
import {AppBar, Toolbar, Grid, Button} from '@mui/material';
import {NavLink} from 'react-router-dom';
import {LOGIN_ROUTE} from '../utils.js/constants';
import {Context} from '../index';
import {useAuthState} from 'react-firebase-hooks/auth';


const Navbar = () => {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);

    return (
        <AppBar position="static">
            <Toolbar variant={"dense"}>
                <Grid container justifyContent={"flex-end"}>
                    {user ?
                        <Button onClick={() => auth.signOut()} variant={"outlined"} color={"inherit"}>LogOUT</Button>
                        :
                        <NavLink to={LOGIN_ROUTE} style={{color: "white", textDecoration: "none"}}>
                            <Button variant={"outlined"} color={"inherit"}>LogIN</Button>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;