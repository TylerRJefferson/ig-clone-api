import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { getAllPhotos, addNewPhoto } from "./src/photos.js";

const app = express();
app.use(cors());
app.use(express.json()); //any time doing anything other than .get

app.get("/photos", getAllPhotos)
app.post("/photos", addNewPhoto)

export const api = functions.https.onRequest(app);
