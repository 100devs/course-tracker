const Post = require('../models/Post')

module.exports = {
    
    createPost: async (req, res) => {
        try {
            const post = await Post.create({
                title: req.body.title,
                body: req.body.body,
                isDraft: req.body.isDraft,
            })

            res.json({message: 'Post Created!', post})

        } catch (error) {
            console.log(error)
        }
    },
    editPost: async (req, res) => {

        const {title, body, isDraft} = req.body
        const id = req.params.id

        try {
            if(title){
                // try catch that updates title
                try {

                    await Post.findOneAndUpdate({_id: id},{title: title},{new: true})

                } catch (error) {
                    console.log(error)
                }
            }
            if(body){
                // try catch that updates body
                try {

                    await Post.findOneAndUpdate({_id: id},{body: body},{new: true})

                } catch (error) {
                    console.log(error)
                }
            }
            if(isDraft){
                // try catch that updates body
                try {

                    await Post.findOneAndUpdate({_id: id},{isDraft: isDraft},{new: true})

                } catch (error) {
                    console.log(error)
                }
            }

            const post = await Post.findById({_id: id})

            res.json({message: 'Post has been updated!', post})

        } catch (error) {
            console.log(error)
        }
    }
}
