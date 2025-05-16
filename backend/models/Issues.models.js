import mongoose from "mongoose";
const { Schema } = mongoose;

const issueSchema = new Schema({
    reportedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
        unique: true,
    },
    videoUrl: {
        type: String,
        required: true,
        unique: true,
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
    },
    status: {
        type: String,
        enum: ['pending', 'in-progress', 'resolved', 'rejected'],
    }
})

// might be needed for future
// issueSchema.index({ "location.coordinates": "2dsphere" });

export const Issue = mongoose.model('Issue', issueSchema)