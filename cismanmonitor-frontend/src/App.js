import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8080/api/hello")
            .then(response => setMessage(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">React + Spring Boot</h1>
            <p>{message}</p>
        </div>
    );
};

export default Home;
