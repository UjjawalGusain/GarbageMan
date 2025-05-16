import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

const userCredentialsSchema = new mongoose.Schema({
    uid: {
        index: true,
        type: String,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true,
    },
    location: {
        address: {
            type: String,
            required: true,
        },
        coordinates: {
            type: {
                type: String,
                enum: ['Point'],
                required: true,
            },
            coordinates: {
                type: [Number],
                required: true,
            }
        }
    },
    createdAt: {
        type: String,
        required: true
    }
})

export const User = mongoose.model('User', userCredentialsSchema)