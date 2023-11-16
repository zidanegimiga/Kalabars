import { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { token } = req.body;

    if (!token) {
      return res
        .status(400)
        .json({ error: "Token is missing in the request body" });
    }

    const db = await open({
      filename: "./sessions.db",
      driver: sqlite3.Database,
    });

    try {
      const currentTime = new Date().toISOString();
      const session = await db.get(
        "SELECT * FROM sessions WHERE token = ? AND expiration >= ?",
        [token, currentTime]
      );

      if (!session) {
        return res.status(401).json({ error: "Token is expired or invalid" });
      }

      res.status(200).json({ message: "Token is valid" });
    } catch (error) {
      console.error("Error verifying token:", error);
      res.status(500).json({ error: "Internal Server Error" });
    } finally {
      await db.close();
    }
  } else {
    res.status(405).end();
  }
}
