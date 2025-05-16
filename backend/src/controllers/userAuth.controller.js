import { User } from "../models/UserCredentials.models.js";
import { ApiError } from "../utils/ApiError.js";
import admin from "firebase-admin";
import serviceAccount from "../../service-account.json" with { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const signupUser = async(req, res, next) => {
    try {
        const {
            name,
            email,
            phoneNumber,
            uid,
            location,
            idToken
        } = req.body;

        if([name, email, phoneNumber, uid].some((field) => field?.trim() === "")) {
            throw new ApiError(400, "All fields are required");
        }
        // console.log(`firebase id token: ${idToken}`);
        
        const decodedIdToken = await admin.auth().verifyIdToken(idToken);

        if(decodedIdToken.uid != uid) {
            throw new ApiError(401, "Id token not valid");
        }

        const existingUser = await User.findOne({
            $or: [{
                email: email
            }, {
                phoneNumber: phoneNumber
            }, {
                uid: uid
            }]
        });

        if(existingUser) {
            throw new ApiError(409, "User already exists");
        };

        const createdAt = new Date().toISOString();

        const newUser = new User({
            uid,
            name,
            email,
            phoneNumber,
            location,
            createdAt
        });

        await newUser.save();

        return res.status(201).json({ message: "User signed up successfully", user: { uid, name, email, phoneNumber, location, createdAt } });
    } catch(error) {
        next(error);
    }
}

export { signupUser };