import tasksModel from "../models/Tasks.js";

const tasksController = {};

tasksController.getAllTasks = async (req, res) => {
    try {
        const tasks = await tasksModel.find();
        res.status(200).json(tasks);
    } catch (error) {
        console.log("error " + error);
        res.status(500).json({message: "Internal server error"});
    }
};

tasksController.insertTasks = async (req, res) => {
    const {title, description, completed} = req.body;

    try {
        if(!title || !description || completed === undefined){
            return res.status(400).json({message: "All fields are required"});
        }

        if(title.length < 4 || description.length < 4){
            return res.status(400).json({message: "Question and answer must be at least 4 characters long"});
        }

        const newTasks = new tasksModel({
            title, description, 
        });

        newTasks.save();

        return res.status(200).json({message: "Tasks saved"});
    } catch (error) {
        console.log("error " + error);
        return res.status(500).json({message: "Internal server error"});
    }
};

tasksController.updateTasks = async (req, res) => {
    const {title, description, completed} = req.body;

    try {

        if(title.length < 4 || description.length < 4){
            return res.status(400).json({message: "Question and answer must be at least 4 characters long"});
        }

        const updateTasks = await faqsModel.findByIdAndUpdate(req.params.id, {title, description, completed}, {new: true});

        if(!updateTasks){
            return res.status(400).json({message: "Not found"});
        }

        res.status(200).json({message: "Faqs updated"});
        
    } catch (error) {
        console.log("error " + error);
        return res.status(500).json({message: "Internal server error"});
    }
};

tasksController.deleteTasks = async (req, res) => {
    try {
        const deletedTasks = await tasksModel.findByIdAndDelete(req.params.id);

        if(!deletedTasks){
            return res.status(400).json({message: "Not found"});
        }

        res.status(200).json({message: "tasks deleted"});
    } catch (error) {
        console.log("error " + error);
        return res.status(500).json({message: "Internal server error"});
    }
};

export default tasksController;