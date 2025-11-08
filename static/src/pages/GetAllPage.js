import React from "react";

import Post from "../components/Post";

export default function GetAllPage() {
    const [data, setData] = React.useState([]);
    const [status, setStatus] = React.useState('');

    React.useEffect(() => {
        async function getPosts() {
            const response = await fetch('http://localhost:6989/api/posts',
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

        getPosts();
    }, []);

    return (
        status === 'error' ? <>Error, the data could not be retreived</> :
            <div className="d-flex flex-column gap-3 w-100" style={{minHeight: '200px'}}>
                {data.map((item) => <Post key={item.id} {...item} />)}
            </div>
    )
}