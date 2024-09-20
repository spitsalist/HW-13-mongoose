import {Router} from 'express'
import Magazine from '../models/magazine.js'

export const magazinesRouter = Router()

magazinesRouter.get('/', async (req, res) => {
    try {
        const magazines = await Magazine.find().populate('publisher')
        res.json(magazines)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

magazinesRouter.post('/', async(req, res) => {
    const magazine = await Magazine.create({
        title: req.body.title,
        issueNumber: req.body.issueNumber,
        publisher: req.body.publisher,
    })
    try{
        res.json(magazine)
    }catch(error){
        res.status(400).json({message: error.message})
    }
})
