import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mashrabmamarizayev:4R2A6UEPjjdydkTo@cluster0.v9sgbu2.mongodb.net/food-del').then(()=>console.log("DataBase Connected"));
}