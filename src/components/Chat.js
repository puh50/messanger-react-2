import React, {useContext, useState} from 'react';
import {Avatar, Button, Container, Grid, TextField} from '@mui/material';
import {Context} from '../index';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import firebase from 'firebase/app';
import Loader from './Loader';
// import {collection, getDocs} from "firebase/firestore";

const Chat = () => {

    const {auth, firestore} = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState('');
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    );

    // const output = firestore.collection("messages").get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         console.log(doc.id, " => ", doc.data());
    //         return output;
    //     });
    // });

    const sendMessage = async () => {
        if (value) {
            firestore.collection('messages').add({
                uid: user.uid,
                displayName: user.displayName,
                photoURL: user.photoURL,
                text: value,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            });

            setValue('');
        };

        return;
    }

    if (loading) {
        return <Loader />
    }

    return (
        <Container>
            <Grid container
                style={{height: window.innerHeight - 50}}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <div style={{width: "80%", height: "70vh", border: "1px solid gray", borderRadius: 5, overflowY: "auto"}}>
                    {messages.map(message =>
                        <div key={message.createdAt}
                            style={{
                                margin: 10,
                                border: user.uid === message.uid ? "2px solid green" : "2px dashed red",
                                borderRadius: 5,
                                width: "80%",
                                marginLeft: user.uid === message.uid ? "auto" : "10px",
                                padding: 5,

                            }}>
                            <Grid container>
                                <Avatar src={message.photoURL} />
                                <div>{message.displayName}</div>
                            </Grid>
                            <div>{message.text}</div>
                            <div></div>
                        </div>
                    )}
                </div>
                <Grid container
                    direction={"column"}
                    alignItems={"flex-end"}
                    style={{width: "80%"}}
                >
                    <TextField
                        fullWidth
                        maxRows={2}
                        variant={"outlined"}
                        margin={"dense"}
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        label="Type a message here"
                    />
                    <Button onClick={sendMessage} variant={"outlined"}>Submit</Button>
                </Grid>
            </Grid>
        </Container >
    );
};

export default Chat;