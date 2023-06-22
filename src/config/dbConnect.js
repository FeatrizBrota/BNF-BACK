import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const dbUri = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('strictQuery', false);

const db = mongoose.connection.useDb(DB_NAME);

export default db;
