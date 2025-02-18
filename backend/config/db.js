import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/NoteApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('✅ Connected to MongoDB');
}).catch((error) => {
    console.log('❌ Error connecting to MongoDB:', error);
});

const db = mongoose.connection;
db.on("connected", () => console.log("✅ MongoDB Connected"));
db.on("disconnected", () => console.log("⚠️ MongoDB Disconnected"));
db.on("error", (error) => console.log("❌ MongoDB Error:", error));

export default db;
