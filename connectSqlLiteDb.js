const sqlite3 = require("sqlite3").verbose();

// Connecting to or creating a new SQLite database file
const db = new sqlite3.Database(
    "./sessions.db",
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log("SQLite database connected");
    }
);

// Ensure database queries are executed sequentially
db.serialize(() => {
    // Create sessions table if it doesn't exist
    db.run(
        `CREATE TABLE IF NOT EXISTS sessions (
        id INTEGER PRIMARY KEY,
        user_id INTEGER,
        token TEXT,
        expiration TIMESTAMP
      )`,
        (err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log("Created sessions table.");
        }
    );
});