import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mashrabmamarizayev:8xviy3YgmFr2z449@cluster0.5lcgu09.mongodb.net/authApp?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DataBase Connected"));
}