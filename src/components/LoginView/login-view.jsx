import React from 'react';

export const LoginView = () => {
    const handleSubmit = (event) => {
        const handleSubmit = (event) => {
            //this prevents the default behaviour of the form which is to reload the entire page
            event.preventDefault();

            const data = {
                access: username,
                secret: password
            };

            fetch("https://movie-flix-api-ca627b5a7961.herokuapp.com/login", {
                method: "POST",
                body: JSON.stringify(data)
            });
        };
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <label>Password:</label>
            <input type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
};