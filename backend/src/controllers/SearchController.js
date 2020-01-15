const Dev = require('../models/dev.js')
const parseStringAsArray = require('../utils/ParseStringAsArray')

module.exports = {
    async index(request, response) {
        const { longitude, latitude, techs } = request.query

        const techsArray = parseStringAsArray(techs)

        const devs = await Dev.find({
            techs: {
                $in: techsArray
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000
                }
            }
        })

        response.json(devs)
    },
    
    //atualiza os dados dos devs (nome, avatar, bio, localização e tecnologias)
    async update(request, response) {
        const { name, bio, avatar_url, longitude, latitude, techs, github_username } = request.query

        const techsArray = parseStringAsArray(techs)

        const dev = await Dev.findOneAndUpdate({ github_username }, { 
            name, 
            bio, 
            avatar_url, 
            location: {
                type: 'Point',
                    coordinates: [longitude, latitude]
                }, 
            techs: techsArray } , { new: true } );

        response.json(dev)

    },
    //deleta o dev do banco de dados
    async destroy(request, response){
        const { github_username } = request.query
        
        const dev = await Dev.deleteOne({ github_username })

        response.json({message: 'User Deleted'})
    }
}