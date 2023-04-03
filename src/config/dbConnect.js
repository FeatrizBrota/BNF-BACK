import mongoose from "mongoose";

mongoose.connect("mongodb+srv://brotanaweb:123@BNF-DB.qu9m6ab.mongodb.net/BNF-DB?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('strictQuery', false);

let db = mongoose.connection.useDb("BNF-DB");

export default db;