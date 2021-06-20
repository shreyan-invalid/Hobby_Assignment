import './Title.css';

import React from 'react';

function Title({title}) {
    return (
        <div className="title">
            <h1 style={{textAlign: "center"}}>{title}</h1>
        </div>
    )
}

export default Title
