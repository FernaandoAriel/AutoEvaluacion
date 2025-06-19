import {Schema, model} from "mongoose";

const tasksSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 100,
        trim: true 
    },
    description: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 200,
        trim: true 
    },
    completed:{
        type: Boolean,
        required: true,
        default: true
    }
}, {
    timestamps: true,
    strict: false
});

export default model("tasks", tasksSchema);