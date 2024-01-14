import mongoose from "mongoose";

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-bmdv56p-shard-00-00.zsuqqrw.mongodb.net:27017,ac-bmdv56p-shard-00-01.zsuqqrw.mongodb.net:27017,ac-bmdv56p-shard-00-02.zsuqqrw.mongodb.net:27017/?ssl=true&replicaSet=atlas-elqmng-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
        await mongoose.connect(
            URL// , { useNewUrlParser: true}
        );
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error while connecting to database", error);
    }
}

export default Connection;