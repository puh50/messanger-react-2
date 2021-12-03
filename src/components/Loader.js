import React from 'react';
import {Container, Grid} from '@mui/material';

function Loader() {
    return (
        <Container>
            <Grid container
                style={{height: window.innerHeight - 50}}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Grid container
                    alignItems={"center"}
                    justifyContent={"center"}
                >
                    <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Loader;