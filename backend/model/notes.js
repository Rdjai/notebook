import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    }
}, { timestamps: true });  // ✅ Adds createdAt & updatedAt automatically

const noteModel = mongoose.model("Note", notesSchema);  // ✅ Use singular & capitalized name

export default noteModel;  // ✅ Use ES6 export (or module.exports for CommonJS)
