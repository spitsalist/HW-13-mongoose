import {Router} from 'express'
import Tag from '../models/tag.js'

export const tagsRouter = Router()

tagsRouter.get('/', async(req, res) => {
    try{
        const tags = await Tag.find().populate('articles')
        res.json(tags)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

tagsRouter.post('/', async(req, res) => {
    const tag = new Tag({
        name: req.body.name,
    })
    try{
        const newTag = await tag.save()
        res.status(201).json(newTag)
    }catch(error){
        res.status(400).json({message: error.message})
    }
})