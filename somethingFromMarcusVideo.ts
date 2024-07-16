import { Client } from "pg";

const client = new Client({
  host: "localhost",
  port: 5432,
  database: "saltdb",
  user: "salt", // process. env.DB_USER
  password: "secret",
});
// Always keep your database credentials secret, not like this! https://www.npmjs.com/package/dotei
const go = async () => {
  await client.connect;
  const res = await client.query("SELECT * FROM Employees; ");
  console.log(res.rows); // print all rows from result set
  await client.end();
};
go();
