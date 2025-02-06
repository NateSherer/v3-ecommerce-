import express from "express";
import mysql2 from "mysql2";
// Cors allows us to create cross request
import cors from "cors";

const app = express();
app.use(cors());
// This establishes our connection to our database using mysql2 npm package
// const connection = mysql2.createConnection({
//   host: "sql5.freesqldatabase.com",
//   user: "sql5760051",
//   password: "nHVH3eTqTc",
//   database: "sql5760051",
// });

const connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ThriftTech",
});

//Checking to see if the connectio is succesfully connected
connection.connect((err) => {
  if (err) {
    console.log("Error connectiong to the databse");
  } else {
    console.log("connected to the databse");
  }
});

// Creating our conection for when we fetch our data
// A file path for requesting the data
app.get("/api/products", (req, res) => {
  const query = "SELECT * FROM Products";

  // The connection query also checks if everything is connected and if it is it will display our json results(Products)
  connection.query(query, (err, results) => {
    if (err) {
      console.log("Error geting products");
      res.status(500).send("Error retrieving products");
    } else {
      res.json(results);
    }
  });
});

//Just checks or listens for our Port
app.listen(3308, () => {
  console.log(`Server is running on port 3309`);
});
