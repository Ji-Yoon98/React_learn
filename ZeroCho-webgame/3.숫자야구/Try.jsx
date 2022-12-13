import React from 'react';

const Try = ({tryInfo}) => {
    return (
        <li>
            <div>{tryInfo.tryInfo.try}</div>
            <div>{tryInfo.tryInfo.result}</div>
        </li>
    )
};

export default Try;