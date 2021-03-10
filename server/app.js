const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());


mongoose.connect('mongodb+srv://jack:appleisgood@cluster0.hagrh.mongodb.net/myFirstDatabase',{ useNewUrlParser: true })
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(4000, () => {
    console.log('API is running on http://localhost:4000/graphql');
});