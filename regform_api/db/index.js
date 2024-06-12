import mongoose from "mongoose";
mongoose
  .connect("mongodb://localhost:27017/ybtest")
  .then(() => {
    console.log("DB connected");
  })
  .catch((e) => {
    console.log(e.messsage);
  });

export default mongoose;
