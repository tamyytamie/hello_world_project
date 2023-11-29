import React, { useState } from "react";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
            </label>
        <br />
        <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleInputChange}
            />
            </label>
            <br />
            <button type="submit">Submit</button>
            </form>
    );
};

export default LoginForm;