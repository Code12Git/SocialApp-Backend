import express from "express";
import multer from "multer";
import cors from "cors";
import connection from "./db/conn.js";

import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import postRoute from "./routes/post.js";
import { serveImages } from "./routes/image.js";

// App router
const app = express();

// Assigning port
const PORT = process.env.PORT || 7000;

// Middlewares
app.use(express.json());

app.use("/images", serveImages);
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use("/api/auth", authRoute);

app.use("/api/users", userRoute);

app.use("/api/post", postRoute);

// Database
connection();

//Adding file Object

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  const originalFileName = req.file.originalname;

  res.status(200).json("File has been uploaded" + originalFileName);
});

// Test route
app.get("/", (req, res) => {
  res.send("Test Route");
});

// Listening Port
app.listen(PORT, () => {
  console.log(`Server is up on PORT: ${PORT}`);
});

export default app;
