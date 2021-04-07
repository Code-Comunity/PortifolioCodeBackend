import mongoose from "mongoose"

const PostSchema = new mongoose.Schema({
    description:{
        type: String, 
        required: true
    },
    justification:{
        type: String,
        required: true
    },
    imageOne:{
        type: String,
        required: true
    },
    imageTwo:{
        type: String,
        required: false
    },
    imageThree:{
        type: String,
        required: false
    }
})

export default mongoose.model('Post', PostSchema)