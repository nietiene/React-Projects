    import React, { useState } from "react";

    const LoginForm = () => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [showPassword, setShowPassword] = useState(false);
        const [error, setError] = useState("");

        const validatePassword = (pass) => {
            if(pass.length < 6) return 'Password must be at least 6 characters';
            if (!/[0-9]/.test(pass)) return 'Password must include a number';
            if(!/[A-Z]/.test(pass)) return 'Passowrd must include Uppercase letter';
            return ""; 
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            const err = validatePassword(password);

            if (err) {
                setError(err);
            } else {
                setError("");
                alert("Login successfully (but this is fake )");
                // You can use API
            }
        };


        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="Email">Email</label>
                        <input type="email" value={email} required
                        onChange={(e) => setEmail(e.target.value)}
                        /> <br />
                    <label htmlFor="Password">Password</label>
                    <input type={showPassword ? 'text' : 'password'}
                    value={password} required onChange={(e) => {
                        setPassword(e.target.value)
                        setError(validatePassword(e.target.value))
                    }}
                    /> <br />
                    <label htmlFor="">
                        <input type="checkbox" checked= {showPassword} 
                        onChange={() => setShowPassword(prev => !prev)}
                        />Show Password
                    </label>
                    {error && <div style={{color: 'red'}}>{error}</div>}
                    <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        )
    }
    export default LoginForm