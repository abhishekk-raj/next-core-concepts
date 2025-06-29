import { Metadata } from "next";
import Counter from "./counter";

export const metadata: Metadata = {
    title: {
        absolute: 'Counter'
    }
}

const CounterPage = () => {
    return (
        <div>
            <Counter/>
        </div>
    )
}

export default CounterPage;
