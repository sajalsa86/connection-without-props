/* eslint-disable no-unused-vars */
import React from 'react';

// eslint-disable-next-line react/prop-types
const Cousin = ({ name }) => {
    return (
        <div className="border border-red-200 p-5 rounded-lg m-5">
            <h2>Cousin</h2>
            <p>{name}</p>
        </div>
    );
};

export default Cousin;