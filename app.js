import express from 'express'
import dotenv from 'dotenv'
import {publishersRouter} from './routes/publisher.js'
import {magazinesRouter} from './routes/magazine.js'
import {tagsRouter} from './routes/tags.js'
import {articlesRouter} from './routes/articles.js'
import mongoose from 'mongoose'

dotenv.config({path: '.env'})
const port = process.env.PORT || 3001
const app = express()

app.use(express.json())

app.use('/publishers', publishersRouter)
app.use('/magazines', magazinesRouter)
app.use('/tags', tagsRouter)
app.use('/articles', articlesRouter)

app.listen(port, async() => {
    try{
        await mongoose.connect(process.env.DATABASE_URL)
        console.log(`Server is running on port ${port}`)
    }catch(error){
        console.log(error)
    }
})