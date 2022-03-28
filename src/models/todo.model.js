const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        userId: {type: mongoose.Schema.Types.ObjectId, red: "user", required: true}
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Todo  = mongoose.model("todo", todoSchema);

module.exports = Todo;