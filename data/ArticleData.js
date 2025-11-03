/*import*/ import { Database } from "bun:sqlite";

const connection = new Database("./data/my-database.sqlite");

export function connect() {
    const query = connection.query("CREATE TABLE IF NOT EXISTS post(id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(250), body VARCHAR(1000), author VARCHAR(150));");
    query.run();
}

export function getArticlesFromData() {

}