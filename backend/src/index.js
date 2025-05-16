import dotenv from "dotenv"
import connectDb from "./database/connect.js"
import app from "./app.js"

connectDb()
.then(() => {

    app.on("error", (error) => {
        console.log(`Error: ${error}`);
        throw error;
    })

    app.listen(process.env.PORT || 8000, () => {
        console.log(`App listening on port ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log(`MONGODB connected failed: ${error}`);
})





