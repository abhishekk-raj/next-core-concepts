"use client";

const ErrorBoundary = ({error}: {error: Error}) => {
    return <h1 className="text-red-500">{error.message}</h1>
}

export default ErrorBoundary;
