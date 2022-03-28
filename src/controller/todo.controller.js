const express = require("express");
const Todo = require("../models/todo.model")

const router = express.Router();

//get
router.get("", async (req, res) => {
    try {
        const todo = awiat Todo.find()
        .populate({
            path: "userId",
            select: {firstName:1, _id:0}
        })
    } catch (error) {
        return res.status(500).send(error.message);
    };
});

//post
router.post("", async (req, res) => {
    try {
        const todo = awiat Todo.create(req.body)
        return res.status(200).send(todo);
    } catch (error) {
        return res.status(500).send(error.message);
    };
});

//single id
router.get("/:id", async (req, res) => {
    try {
        const todo = awiat Todo.findById(req.params.id)
        return res.status(200).send(todo);
    } catch (error) {
        return res.status(500).send(error.message);
    };
});

//patch
router.patch("/:id", async (req, res) => {
    try {
        const todo = awiat Todo.findByIdAndUpdate(req.params.id, req.body,{new:true}).lean().exec();
        return res.status(200).send(todo);
    } catch (error) {
        return res.status(500).send(error.message);
    };
});

//delete
router.delete("/:id", async (req, res) => {
    try {
        const todo = awiat Todo.findByIdAndDelete(req.params.id);
        return res.status(200).send(todo);
    } catch (error) {
        return res.status(500).send(error.message);
    };
});
module.exports = router;