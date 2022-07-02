
import mongoose from 'mongoose'

const Data = async(username,password) => {


    const Link = `mongodb://${username}:${password}@blog-website-shard-00-00.valyh.mongodb.net:27017,blog-website-shard-00-01.valyh.mongodb.net:27017,blog-website-shard-00-02.valyh.mongodb.net:27017/?ssl=true&replicaSet=atlas-2gwitb-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
    await mongoose.connect(Link, { useNewUrlParser: true });
    console.log('database connected');
    }

    catch(error){
        console.log('error connecting',error)
    }

}

export default Data