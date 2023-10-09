// import { NextApiRequest, NextApiResponse } from "next";
// import sqlite3 from "sqlite3";
// import { open } from "sqlite";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   let db = null;
//   if (req.method === "POST") {
//     const { email, password } = req.body;

//     if (email && password) {
//       const authHeader = btoa(email + ":" + password);
//       const response = await fetch("https://content.kalabars.com/login", {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Basic ${authHeader}`,
//         },
//       });
//       const data = await response.json();
//       res.status(200).json(data);
//     } else {
//       res.status(400).json({ error: "Invalid request body" });
//     }
//   } else {
//     res.status(405).end();
//   }
// }

import { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    if (email && password) {
      const authHeader = btoa(email + ":" + password);
      const response = await fetch("https://content.kalabars.com/login", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${authHeader}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.response.token;

        const expiration = new Date();
        expiration.setDate(expiration.getDate() + 5);

        const db = await open({
          filename: "./sessions.db",
          driver: sqlite3.Database,
        });

        try {
          await db.run(
            "INSERT INTO sessions (user_id, token, expiration) VALUES (?, ?, ?)",
            [1, token, expiration.toISOString()]
          );

          res.status(200).json(data);
        } catch (error) {
          console.error("Error inserting session into the database:", error);
          res.status(500).json({ error: "Internal Server Error" });
        } finally {
          await db.close();
        }
      } else {
        res.status(400).json({ error: "Authentication failed" });
      }
    } else {
      res.status(400).json({ error: "Invalid request body" });
    }
  } else {
    res.status(405).end();
  }
}


// async function authenticateUser(username, password) {
//   let db = null;

//   // Check if the database instance has been initialized
//   if (!db) {
//     db = await open({
//       filename: "userdatabase.db", // Specify the database file path
//       driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
//     });
//   }

//   const sql = `SELECT * FROM users WHERE username = ? AND password = ?`;
//   const user = await db.get(sql, username, password);
//   return user;
// }