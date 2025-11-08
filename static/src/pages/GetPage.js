import React, { Fragment } from "react";

import Post from "../components/Post";

export default function GetPage() {
    const [data, setData] = React.useState(null);
    const [status, setStatus] = React.useState('');

    // form
    const [id, setID] = React.useState(null);

    function handleClick(event) {
        event.preventDefault();
        
        async function getPost() {
            const response = await fetch('http://localhost:6989/api/posts/' + id,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                });

            if (!response.ok) {
                setStatus('error');
                return;
            }

            const posts = await response.json();
            setData(posts);

            setStatus('success');
        }

        getPost();
    }
    return (
        <div className="w-100">
            <form className="d-flex flex-column align-items-center justify-content-center w-100" onSubmit={handleClick} method="GET">
                <div className="w-50">
                    <div className="mb-3 row w-100">
                        <label htmlFor="inputID" className="col-sm-2 col-form-label">ID</label>
                        <div className="col-sm-10">
                            <input onChange={(event) => setID(event.target.value)} type="text" className="form-control" id="inputID" />
                        </div>
                    </div>
                </div>

                <button className="btn btn-primary px-5">Get</button>

            </form>
            <div className="container d-flex flex-column p-4">
                <Post { ...data } />
            </div>
        </div>

    )
}