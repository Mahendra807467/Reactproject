import React, { useState } from 'react';
import { addTransaction } from '../api/transactions';
import { useHistory } from 'react';

const AddTransaction = () => {
    const [type, setType] = useState('Credit');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const history = useHistory();

    const onSubmit = async (e) => {
        e.preventDefault();
        await addTransaction({ type, amount, description });
        history.push('/');
    };

    return (
        <div>
            <h1>Add New Transaction</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Type</label>
                    <select value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="Credit">Credit</option>
                        <option value="Debit">Debit</option>
                    </select>
                </div>
                <div>
                    <label>Amount</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default AddTransaction;