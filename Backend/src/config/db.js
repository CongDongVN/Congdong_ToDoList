import mongoose from 'mongoose';

export const connectDB = async () => {
   try{
    await mongoose.connect(
        process.env.MONGODB_CONNECTIONSTRING
    );

    console.log("Liên kết cơ sở dữ liệu thành công");
   } catch(error){
    console.error("Lỗi kết nối với cơ sở dữ liệu: ", error);
    process.exit(1);
   }
};