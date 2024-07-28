import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react';
import Transactions from './pages/Transactions';
import AddTransaction from './pages/AddTransactions';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Transactions} />
                <Route path="/add" component={AddTransaction} />
            </Switch>
        </Router>
    );
};

export default App;