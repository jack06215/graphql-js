import React, { Component, useState } from 'react';
// apollo
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';


// components
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import Login from './components/Login/Login';


// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    // const Message = () => {
    //   const [token, setToken] = useState();
    //   return Message;
    // }
    // if(!Message.token) {
    //   return <Login setToken={Message.setToken} />
    // }
    // console.log(Message);
    return (
        <ApolloProvider client={client}>
            <div id="main">
                <h1>Jack's Reading List</h1>
                <BookList />
                <AddBook />
            </div>
        </ApolloProvider>
    );
  }
}

export default App;
