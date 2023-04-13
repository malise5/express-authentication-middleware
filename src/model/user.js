const express = require("express");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name must filled "],
        unique: [true, "name must be unique"],
        trim: true,
    },
    email: String,
    age: Number,
    gender: String,
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
