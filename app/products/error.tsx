"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

const ErrorBoundary = ({error, reset}: {error: Error, reset: () => void}) => {
    const router = useRouter();
    const reload = () => {
        startTransition(() => {
            router.refresh();
            reset();
        })
    }

    return <>
        <h1 className="text-red-500">{error.message}</h1>
        <button onClick={reload} className="border rounded-2xl">Try Again</button>
    </>
}

export default ErrorBoundary;
