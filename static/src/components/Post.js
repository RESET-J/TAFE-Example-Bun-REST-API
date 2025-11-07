import React from "react";

export default function Post({ title, body, author }) {
    return (
        <div className="card" style="width: 18rem;">
            {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <h3 className="card-subtitle mb-2 text-body-secondary">by {author}</h3>
                    <p className="card-text">{body}</p>
                </div>
        </div>
    );
}