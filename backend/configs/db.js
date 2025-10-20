import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log('MongoDB Connected');
        });
        await mongoose.connect(`${process.env.MONGODB_URI}/QuickBlog`)   
    } catch (error) {
        console.log(error);
    }
};

export default connectDB;