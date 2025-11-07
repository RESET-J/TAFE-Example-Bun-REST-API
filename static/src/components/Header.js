import React from "react";

export default function Header() {
    const styles = {
        backgroundColor: '#213ABF',
    }

    return (
        <header>
            <nav className="navbar" style={styles}>
                <div className="container-fluid">
                    <a style={{ color: 'white' }} className="navbar-brand" href="#">Example Bun REST API</a>
                </div>
            </nav>
        </header>
    )
}