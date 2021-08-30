const Post = require('../models/Post')

module.exports = {
    
    createPost: async (req, res) => {
        try {
            await Post.create({
                title: req.body.title,
                body: req.body.body,
                isDraft: req.body.isDraft,
            })

            res.json({message: 'Post Created!'})

            } catch (error) {
            console.log(error)
        }
    },
    editPost: async (req, res) => {

        const {title, body} = req.body
        const id = req.params.id

        try {
            if(title){
                // try catch that updates title
                try {

                    await Post.findOneAndUpdate({_id: id},{title: title})

                } catch (error) {
                    console.log(error)
                }
            }
            if(body){
                // try catch that updates body
                try {

                    await Post.findOneAndUpdate({_id: id},{body: body})

                } catch (error) {
                    
                }
            }
            res.json({message: 'Post has been updated!'})

            } catch (error) {
            console.log(error)
        }
    }
}
