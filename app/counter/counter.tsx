"use client";

import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    
        return (
            <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)} className="bg-gray-800 px-4 py-2 mt-2 text-white rounded-2xl">Increment</button>
            </div>
        )
}

export default Counter;
