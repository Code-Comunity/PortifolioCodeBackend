import mongoose from 'mongoose'

const ContactSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    email:{ 
        type: String, 
        required: true 
    },

    phone: Number,

    message:{ 
        type: String, 
        required: true 
    },
    about:{ 
        type: String,
        required: true
    },
    date:{ 
        type: Date,
        default: Date.now 
    },

})
export default mongoose.model('Contact',ContactSchema)