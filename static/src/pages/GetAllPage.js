import React from "react";

export default function GetAllPage() {
    const { data, setData } = React.useState(null);
    const { status, setStatus } = React.useState('');

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

            status === 'success' ? <>Success</> :
                <>
                    Hello, World!
                </>
    )
}