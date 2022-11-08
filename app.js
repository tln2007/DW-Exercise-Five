const express = require('express');
const firebase = require('firebase/app');
const app = express();
const port = process.env.PORT || 4000;
// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVzCgCxwuH0J1InvcTgYMOyxzh1H0TXpA",
    authDomain: "dw-exercise-five.firebaseapp.com",
    projectId: "dw-exercise-five",
    storageBucket: "dw-exercise-five.appspot.com",
    messagingSenderId: "1088522355739",
    appId: "1:1088522355739:web:0a4cf09ca818da213464be"
  };
firebase.initializeApp(firebaseConfig);

const indexRoute = require('./routes/index');
const singlePostRoute = require('./routes/singlePost');
const createPostRoute = require('./routes/createPost');

app.use("/", indexRoute);
app.use("/post", singlePostRoute);
app.use("/create", createPostRoute);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});