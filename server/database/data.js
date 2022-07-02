
// import mongoose from 'mongoose'

// const Connection = async(username,password) => {

//     // VQ88KVnBicpJDbEQ
//     const url = `mongodb://${username}:${password}@blog-website-shard-00-00.valyh.mongodb.net:27017,blog-website-shard-00-01.valyh.mongodb.net:27017,blog-website-shard-00-02.valyh.mongodb.net:27017/?ssl=true&replicaSet=atlas-2gwitb-shard-0&authSource=admin&retryWrites=true&w=majority`
//     try{
//     await mongoose.connect(url, { useNewUrlParser: true });
//     console.log('database connected');
//     }

//     catch(error){
//         console.log('error connecting',error)
//     }

// }

// export default Connection


import mongoose from "mongoose";



const connection = async (uername, password) => {
    // const URL = `mongodb://aditya:aditya12@cluster0-shard-00-00.jrlvl.mongodb.net:27017,cluster0-shard-00-01.jrlvl.mongodb.net:27017,cluster0-shard-00-02.jrlvl.mongodb.net:27017/?ssl=true&replicaSet=atlas-3prp21-shard-0&authSource=admin&retryWrites=true&w=majority`;
    // PaAHQhjX0ocBNUyH
    const URL = `mongodb+srv://${uername}:${password}@cluster0.k2uq6xu.mongodb.net/?retryWrites=true&w=majority`;
    // PaAHQhjX0ocBNUyH

    try {
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log("database connected successfully");
    } catch (error) {
        
        console.log(`Not Connected error is: ${error}`);

    }
}

export default connection;
// module.exports=connection;
