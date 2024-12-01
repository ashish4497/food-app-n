const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDb = require("./config/db");

const app = express();

//dotenv configration
dotenv.config();

//DB connection
connectDb();

//Port
const Port = process.env.PORT || 8080;

//middleware
app.use(cors());
//use to get json forrmat data from client
app.use(express.json());
app.use(morgan("dev"));

//route
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRouter"));
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/restruant", require("./routes/resturantRouter"));

app.get("/", (req, res) => {
  return res.status(200).send("welcome To App Food");
});

//listen
app.listen(Port, () => {
  console.log(`Server running on ${Port}`.bgYellow);
});

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,POST",
  allowedHeaders: "Content-Type",
};

app.use(cors(corsOptions));
