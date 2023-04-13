const express = require("express");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name must filled "],
    },
    email: String,
    age: Number,
    gender: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
