import {Router} from 'express'
import Article from '../models/articles.js'
import Tag from '../models/tag.js'

export const articlesRouter =  Router()



articlesRouter.get('/', async(req, res) => {
    try{
        const articles = await Article.find().populate('tags')
        res.json(articles)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

articlesRouter.post('/', async(req, res) => {
    const article = await Article.create({
        title: req.body.title,
        content: req.body.content,
        tags: req.body.tags
    })
    try{
    
        await Tag.updateMany(
            {_id: {$in: article.tags}},
            {$push: {articles: article._id}}
        )
        res.status(201).json(article)
    }catch(error){
        res.status(400).json({message: error.message})
    }
})