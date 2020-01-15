const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/ParseStringAsArray');

// Controler possui 5 funções: index (quando quero mostrar uma lista de devs), show (mostrar apenas um dev), store, update, destroy

module.exports = {
    async index(request,response){
        const devs = await Dev.find();

        return response.json(devs);
    },
    
    async store(request, response) { //utiliza a async para não ficar esperando terminar e await para esperar o resultado voltar para terminar
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if (!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`); //com a crase ao inves das aspas para utilizar variáveis na string (Template Strings)
        
            let { name = login, avatar_url, bio } = apiResponse.data;

            const techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            };

            const dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })
        }

        return response.json(dev);
}};