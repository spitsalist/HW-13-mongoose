import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    articles: [
        {
            type: mongoose.Schema.Types.ObjectId, ref: 'Articles',
        },
    ],
})

const Tag = mongoose.model('Tag', tagSchema)
export default Tag