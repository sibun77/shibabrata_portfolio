const UserMessage = require("../models/user")

const homepageController = (req, res) => {
    res.json({"message":"server running ..."});
}

// message insert
const userMessageController = async (req, res) => {
    try {
        const { userName, userEmail, userMessage } = req.body;

        const newMessage = new UserMessage({
            name: userName,
            email: userEmail,
            message: userMessage,
            isResponsed: false,
        });
        await newMessage.save();

        // console.log("Message saved to DB:", newMessage);

        res.status(200).json({ message: "Successfully sent message." });
    } catch (error) {
        // console.error("Error saving message:", error); 
        res.status(501).json({ message: "Internal server error", error: error.message });
    }
}

module.exports = {
    homepageController,
    userMessageController,
}
