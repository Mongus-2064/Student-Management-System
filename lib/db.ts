import mongoose from "mongoose";


export const connectdb = async () => {
    try {
        const MONGO_URI = process.env.MONGO_URI

        if (!MONGO_URI) return console.log("URI not found")

        await mongoose.connect(MONGO_URI as string);
       return console.log("Database Connected Successfully!");

    } catch (error) {
return console.log("Internal Server Error",error);
    }
}