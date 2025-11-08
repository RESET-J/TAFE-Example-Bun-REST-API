import React from "react";

import Post from "../components/Post";

export default function PostPage() {
    // const [data, setData] = React.useState(null);
    const [status, setStatus] = React.useState('');

    // form
    const [title, setTitle] = React.useState('');
    const [body, setBody] = React.useState('');
    const [author, setAuthor] = React.useState('');

    function handleClick(event) {
        event.preventDefault();

        async function postPost() {
            const response = await fetch('http://localhost:6989/api/posts',
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        title: title,
                        body: body,
                        author: author
                    })
                });

            if (!response.ok) {
                setStatus('error');
                return;
            }

            setStatus('success');
        }

        postPost();
    }
    return (
        <div className="w-100">
            <form className="d-flex flex-column align-items-center justify-content-center w-100" onSubmit={handleClick} method="GET">
                <div className="w-50">
                    <div className="mb-3 row w-100">
                        <label htmlFor="inputTitle" className="col-sm-2 col-form-label">Title</label>
                        <div className="col-sm-10">
                            <input onChange={(event) => setTitle(event.target.value)} type="text" className="form-control" id="inputTitle" />
                        </div>
                    </div>
                    <div className="mb-3 row w-100">
                        <label htmlFor="inputAuthor" className="col-sm-2 col-form-label">Author</label>
                        <div className="col-sm-10">
                            <input onChange={(event) => setAuthor(event.target.value)} type="text" className="form-control" id="inputAuthor" />
                        </div>
                    </div>
                    <div className="mb-3 row w-100">
                        <label htmlFor="inputBody" className="col-sm-2 col-form-label">Title</label>
                        <div className="col-sm-10">
                            <textarea onChange={(event) => setBody(event.target.value)} id="inputBody" className="form-control" rows="3"></textarea>
                        </div>
                    </div>
                </div>

                <button className="btn btn-primary px-5">Post</button>

            </form>
            <div className="container d-flex flex-column p-4">
                {status === "error" ? <>Error, Cannot Add Post</> : status === "success" ? <>Post Successfully Added</> : null}
            </div>
        </div>

    )
}