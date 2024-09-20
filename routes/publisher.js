import {Router} from 'express'
import Publisher from '../models/publisher.js'

export const publishersRouter = Router()

publishersRouter.get('/', async (req, res) => {
    try{
        const publisher = await Publisher.find()
        res.json(publisher)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

publishersRouter.post('/', async (req, res) => {
    const publisher = new Publisher({
        name: req.body.name,
        location: req.body.location,
    })
    try{
        const newPublisher = await publisher.save()
        res.json(newPublisher)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

