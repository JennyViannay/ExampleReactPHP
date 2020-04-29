import React, { useState } from 'react';

const Count = () => {
    const [count, setCount] = useState(0);

    return(
        <div>
            <h1>{count}</h1>
            <br/>
            <input type="button" value="-1" onClick={() => { setCount(count -1)}}/>
            <input type="button" value="+1" onClick={() => { setCount(count +1)}}/>
        </div>
    )
}

export default Count;