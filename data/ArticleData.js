/*import*/ import { Database } from "bun:sqlite";

const connection = new Database("./data/my-database.sqlite");

export function connect() {
    const query = connection.query(
        `CREATE TABLE IF NOT EXISTS post(
             id INTEGER PRIMARY KEY AUTOINCREMENT,
             title VARCHAR(250), 
             body VARCHAR(1000), 
             author VARCHAR(150)
             );`);

    query.run();
}

export function getPosts() {
    const query = connection.query(`SELECT * FROM post;`);

    let item = query.all();

    console.log(item.length <= 0 ? "has worked well" : "nope");

    return item;
}

export function getPost(id) {
    const query = connection.query(`SELECT * FROM post WHERE id == ?;`)

    let item = query.get(id);

    return item;
}

export function addPost(data) {
    const query = connection.query(`INSERT INTO post (title, body, author) VALUES ( ?, ?, ? );`);

    query.run(data.title, data.body, data.author);
}

export function editPost(data) {
    const item = getPost(data.id);

    if ( !item ) {
        return null;
    }

    console.log(item.id);
    const query = connection.query(
        `UPDATE post 
        SET 
        title = COALESCE(?, title), 
        body = COALESCE(?, body), 
        author = COALESCE(?, author)
        WHERE id = ?;
        `
    );

    // query.prepare();

    query.run(data.title || null, data.body || null, data.author || null, item.id);

    return item.id;
}

export function deletePost(id) {
    const query = connection.query(`DELETE FROM post WHERE id == ?;`);

    query.run(id);
}










































































































































