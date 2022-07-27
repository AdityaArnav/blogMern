
import mongoose from 'mongoose'

const Data = async (username,password) => {


    const Link = `mongodb+srv://${username}:${password}@cluster0.pylfc.mongodb.net/?retryWrites=true&w=majority`
    try{
    await mongoose.connect(Link, { useNewUrlParser: true });
    console.log('database connected');
    }

    catch(error){
        console.log('error connecting',error)
    }

}

export default Data