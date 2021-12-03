import React, {useContext} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import {Context} from '../index';
// import {privateRoutes, publicRoutes} from '../routes';
import {useAuthState} from 'react-firebase-hooks/auth';
import Chat from './Chat';
import Login from './Login';
// import {CHAT_ROUTE, LOGIN_ROUTE} from '../utils.js/constants';

const AppRouter = () => {

    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);

    return user ?
        (
            <Routes>
                <Route path={"/chat"} element={<Chat />} />
                <Route path={"/"} element={<Navigate to={"/chat"} />} />
                <Route path={"/login"} element={<Navigate to={"/chat"} />} />
            </Routes>
        )
        :
        (
            <Routes>
                <Route path={"/login"} element={<Login />} />
                <Route path={"/chat"} element={<Navigate to={"/login"} />} />
            </Routes>
        )

};

export default AppRouter;