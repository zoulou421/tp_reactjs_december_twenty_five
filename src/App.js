import React, { useEffect } from "react";

const API_URL = 'https://www.omdbapi.com?apikey=d2b20d60';

const App = () => {
    const searchMovies = async (title = "Batman") => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data);
    };

    useEffect(() => {
        searchMovies(); // Appelle la recherche au chargement
    }, []);

    return (
        <h1>Hello APP</h1>
    );
};

export default App;
