import { useState } from 'react';

export const SignupView = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");

    const handleSubmit = (event) => { };

    return (
        <form onSubmit={handleSubmit}>

            <label>
                Username:
                <input type="text" />
            </label>

            <label>
                Password:
                <input type="text" />
            </label>

            <label>
                Email:
                <input type="text" />
            </label>

            <label>
                Birthday:
                <input type="text" />
            </label>

        </form>
    )
};