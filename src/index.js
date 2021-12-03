import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
firebase.initializeApp(
    {
        apiKey: "AIzaSyA6q_ULXGoGdPBeFzz9hY23Yqn0bz003Rs",
        authDomain: "messanger-itsm-1.firebaseapp.com",
        projectId: "messanger-itsm-1",
        storageBucket: "messanger-itsm-1.appspot.com",
        messagingSenderId: "218371577822",
        appId: "1:218371577822:web:51fd03c3ea115398aaef4f"
    }
);

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore,
    }}>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
