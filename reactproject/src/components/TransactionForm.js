import React from 'react';

const TransactionForm = ({ type, setType, amount, setAmount, description, setDescription, onSubmit }) => {
    return (
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
    );
};

export default TransactionForm;