import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./AuthContext";
import Home from "./Home"
import Login from "./login";

function PrivateRoute({ children}) {
    const { user } = useAuth();
    return user ? children : <Navigate to="/login"/>
}

export default function Main(){
    return (
        <AuthProvider>
            <Router>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </Router>
        </AuthProvider>
    )
}