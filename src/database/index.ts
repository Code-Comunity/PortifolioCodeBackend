import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://codecomunity:159753abC@userscodecomunity.htxjj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
mongoose.Promise = global.Promise

export default mongoose