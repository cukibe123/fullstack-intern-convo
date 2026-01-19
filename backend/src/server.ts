import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const PORT = 3000; //Hardcoded this port

app.listen(PORT, () => {
  console.log(`My full-stack intern project at Convo is running at http://localhost:${PORT}`);
});