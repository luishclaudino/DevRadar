const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/ParseStringAsArray');

module.exports = {
    async index(request, response) {
        const { latitude, longitude, techs } = request.query;

        const techsArray = parseStringAsArray(techs);
        console.log(techsArray)
        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coodinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });
        // Buscar todos os devs num raio de 10km
        //Filtrar por tecnologias
        return response.json({devs: [] });
    }
}