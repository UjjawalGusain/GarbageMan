import mongoose from "mongoose";
import dotenv from "dotenv"
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

mongoose.set('strictQuery', true)
const connectDb = async() => {
    try {
        console.log(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
        
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)

        console.log(`MONGODB Connected !! DB Host: ${connectionInstance.connection.host}`);
    } catch(error) {
        console.log(`MONGODB connection error: ${error}`);
        process.exit(1);
    }
}

export default connectDb;