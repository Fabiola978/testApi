//servicio de Deploy que tenemos es Render
import app from "./app";
import { config } from "dotenv";

config();

const PORT = process.env.PORT; //.env porque es el archivo que contine el PORT

app.listen(PORT, ()=> console.log("Server running on port: ", PORT));
