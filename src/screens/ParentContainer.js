import React from "react";
import { useState } from "react";
import Get from "../components/Get";
import Post from "../components/Post";

const ParentContainer = () => {

    const [result, setResult] = useState("");

    const handleResult = (conversion) => {
        const newState = conversion;
        setResult(newState);
    }

    return (
        <>
            <h1>goCurrency</h1>
            <Get handleResult={handleResult}/>
            <Post result={result}/>
        </>
    );
}

export default ParentContainer;