import express from 'express';
import noteModel from "../model/notes.js"
const router = express.Router();

router.get("/notes", async (req, res) => {
    try {
        const data = await noteModel.find();
        res.status(200).json(data)
    } catch (error) {
        console.log("err", error);
        res.status(500).json({
            error
        })
    }
})

router.post("/add", async (req, res) => {
    const data = req.body;
    try {
        const newNote = new noteModel(data)
        const resp = await newNote.save()
        console.log("save yourd data");
        res.status(200).json(resp)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error
        })
    }
})


//update 
router.put("/:id", async (req, res) => {
    const noteId = req.params.id;
    const data = req.body;
    try {
        const note = await noteModel.findByIdAndUpdate(noteId, data, {
            new: true,
            runValidators: true
        });
        if (!note) return res.status(404).json(eror)
        console.log("note updated", note);
        res.status(200).json(note)
    } catch (error) {

    }
})
export default router