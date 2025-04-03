const User = require("../models/User");

// CREATE
exports.createUser = async (req, res) => {
    const { username, email, passwordHash } = req.body;
    try {
        const user = await User.create({ username, email, passwordHash });
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: "Error creating user", details: err.message });
    }
};

// READ ALL
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select("-passwordHash");
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: "Error fetching users" });
    }
};

// READ ONE
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select("-passwordHash");
        if (!user) return res.status(404).json({ error: "User not found" });
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: "Error fetching user" });
    }
};

// UPDATE
exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        ).select("-passwordHash");
        if (!updatedUser) return res.status(404).json({ error: "User not found" });
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json({ error: "Error updating user" });
    }
};

// DELETE
exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ error: "User not found" });
        res.status(200).json({ message: "User deleted" });
    } catch (err) {
        res.status(500).json({ error: "Error deleting user" });
    }
};
