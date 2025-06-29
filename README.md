
# 🛠 TKChorleyGroupBackend

This is the backend for the **TK Chorley Group Business Intelligence System**. It serves data from local JSON files via an Express.js API and connects with a React frontend client.

---

## 🚀 Getting Started

### 1. Initialize the project

Start by initializing the project and setting up your folders:

```bash
npm init -y
```

### 2. Create the following folder structure:

```
/data         # JSON files containing mock data
/models       # Logic to read/manipulate data
/routes       # API endpoints
.gitignore    # To exclude node_modules
app.js        # Main entry point
```

---

## 📦 Install Required Packages

```bash
npm install express
npm install nodemon --save-dev
npm install cors
```

---

## ⚙ package.json Configuration

Make sure your `package.json` includes the following:

```json
"scripts": {
  "dev": "nodemon app.js"
},
"type": "module"
```

This allows:

* `nodemon` to restart the server automatically on changes.
* `import/export` to work using ES Modules.

📝 If you're getting this error:

> ❌ `Uncaught SyntaxError: Cannot use import statement outside a module`

✅ Follow this fix:
[https://stackoverflow.com/questions/58211880/uncaught-syntaxerror-cannot-use-import-statement-outside-a-module-when-import](https://stackoverflow.com/questions/58211880/uncaught-syntaxerror-cannot-use-import-statement-outside-a-module-when-import)

---

## ▶ Running the Server

Start your backend server using:

```bash
npm run dev
```

---

## ✏️ Building the API

### 1. Create Model Function

* Reads the JSON file (e.g., reports.json)
* Returns report data or an error
* Test the model independently to ensure it's working

### 2. Create Route

* Import the model into your route
* Mount route in `app.js`

```js
import express from "express";
import reportsRouter from "./routes/reportsRouter.js";

const app = express();
app.use(express.json());

app.use("/api/category", reportsRouter);
```

### 3. Example Endpoint: Get Reports by Category

```js
reportsRouter.get("/:category", async function (req, res) {
  const category = req.params.category;
  const data = await getReportsByCategory(category);
  res.status(200).json({ success: true, payload: data });
});
```

✅ Test your endpoint using Postman or an API tester:

```http
GET http://localhost:3005/api/category/Sales
```

---

## 🌐 Connect to Frontend

To allow communication with the frontend (React):

```bash
npm install cors
```

In `app.js`:

```js
import cors from "cors";
app.use(
   cors({
     origin: "http://localhost:3000", // allow requests only from this origin
     methods: ["GET"], // allow only GET requests
     allowedHeaders: ["Content-Type"], // allow this header
   })
 ); // Adjust if your frontend runs on a different port
```

🔗 Reference: [https://stackoverflow.com/questions/47706022/error-cannot-find-module-cors](https://stackoverflow.com/questions/47706022/error-cannot-find-module-cors)
📹 Helpful video: [https://www.youtube.com/watch?v=iqQZjHYpO38](https://www.youtube.com/watch?v=iqQZjHYpO38)

---

## 🧼 .gitignore Setup

Create a `.gitignore` file and add:

```
node_modules/
.env
```

This prevents unnecessary files from being pushed to GitHub.

---

## ✅ Final Notes

* Data is currently mocked in `reports.json` format under `/data`
* Backend and frontend are successfully connected via CORS
* Endpoints have been tested and validated

---

> With more time, I would have implemented additional validation and error handling. 

---

**Happy Coding! 🎉**
