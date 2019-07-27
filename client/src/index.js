import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import './index.css';

import Home from './Home';
import client from './apollo-client';


const App = () =>
    <ApolloProvider client={client}>
        <Home />
    </ApolloProvider>

ReactDOM.render(<App />, document.getElementById('root'));
