import mongoose from "mongoose";

const connectDb = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MONGODB Connected !! DB Host: ${connectionInstance.connection.host}`);
    } catch {
        console.log(`MONGODB connection error: ${error}`);
        process.exit(1);
    }
}

export default connectDb;