# 📒 Contact App — Express.js CRUD with MongoDB

A simple full-stack contact management app built with Node.js, Express, and MongoDB. You can add, view, update, and delete contacts through a clean web interface.

---

## ✨ Features

- Add new contacts with name, email, phone, and address
- View all contacts on the home page
- Click into any contact to see their full details
- Edit or delete contacts with ease
- Clean UI built with Bootstrap and EJS templates

---

## 🛠 Tech Stack

- **Backend** — Node.js, Express.js
- **Database** — MongoDB with Mongoose
- **Templating** — EJS
- **Styling** — Bootstrap + custom CSS

---

## 🧠 What I Learned

This was a really hands-on project and honestly one of the best ways I've found to solidify backend concepts. Here's what clicked for me while building it:

**Express Routing** — I got comfortable setting up GET and POST routes and understanding when to use each. Things like why a delete action uses a GET route with an ID in the URL made more sense once I actually built it myself.

**Connecting to MongoDB with Mongoose** — I learned how to set up a connection, define a schema, and use a model to interact with the database. It removed a lot of the mystery around how  apps talk to databases.

**CRUD Operations** — I used `find`, `insertOne`, `updateOne`, and `deleteOne` in real scenarios, which helped me understand not just the syntax but *when* and *why* you'd use each one.

**EJS Templating** — Passing data from the server to the frontend using EJS was new to me. It was interesting to see how you can render dynamic content by just dropping variables into HTML-like templates.

**Handling Form Data** — I learned how `express.urlencoded` parses incoming form submissions and makes the data available through `req.body`. Small thing, but it confused me at first.

**Project Structure** — Separating the model into its own file and keeping routes in `index.js` gave me a feel for how larger MVC-style projects are typically organized.

Overall, this project taught me that building something end-to-end — even something simple — is way more effective than just reading about how things work.

<img width="1920" height="931" alt="image" src="https://github.com/user-attachments/assets/aa809d9c-7086-4d79-a386-6d7377f60bd7" />
