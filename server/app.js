import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import cors from "cors";
//====================================================
import "./db";
import userRoute from "./routes/userRoute";
import profileRoute from "./routes/profileRoute";
const app = express();
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//====================================================
app.use("/api/users", userRoute);
app.use("/api/profile", profileRoute);
//====================================================
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "..", "client", "build", "index.html")
    );
  });
}
//====================================================
const port = process.env.PORT || 5000;

const handleListen = () => {
  console.log(`Listened on Server - PORT : ${port} `);
};

app.listen(port, handleListen);
