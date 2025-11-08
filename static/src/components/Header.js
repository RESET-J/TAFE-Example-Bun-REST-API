import React from "react";

import { useNavigate } from "react-router";

export default function Header() {
    const navigate = useNavigate();

    const styles = {
        backgroundColor: '#213ABF',
    }

    return (
        <header>
            <nav className="navbar" style={styles}>
                <div className="container-fluid">
                    <a onClick={() => navigate('/')} style={{ color: 'white' }} className="navbar-brand" href="#">Example Bun REST API</a>
                </div>
            </nav>
        </header>
    )
}