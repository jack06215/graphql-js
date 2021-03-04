// import express package
const express = require('express');
const graphqlHTTP = require('express-graphql')

const app = express();

// open a port to listen to requests
app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});

