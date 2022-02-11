const axios = require('axios');
const { YOUR_API_KEY } = process.env;

// Async Await:

// const getApiInfo = async () => {
//     const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)
//     const apiInfo = await apiUrl.data.map(el => {
//         return {
//             id: el.id,
//             name: el.name,
//             heightMin: el.height.metric.split(' - ')[0],
//             heightMax: el.height.metric.split(' - ')[1] ?
//                 el.height.metric.split(' - ')[1] :
//                 Math.round(el.height.metric.split(' - ')[0] * 1.1),
//             weightMin: el.weight.metric.split(' - ')[0] !== "NaN" ?
//                 el.weight.metric.split(' - ')[0] :
//                 (el.weight.metric.split(' - ')[1] ?
//                     Math.round(el.weight.metric.split(' - ')[1] * 0.6) :
//                     '30'),//Math.round(el.weight.imperial.split(' - ')[1] * 0.6 / 2.205).toString()),
//             weightMax: el.weight.metric.split(' - ')[1] ?
//                 el.weight.metric.split(' - ')[1] :
//                 '39',//Math.round(parseInt(el.weight.imperial.split(' - ')[1]) / 2.205).toString(),
//             life_span: el.life_span,
//             temperaments: el.temperament ? el.temperament : null,
//             image: el.image.url,
//         }
//     });
//     return apiInfo;
// }

// Promesa:

const getApiInfo = () => {
    const apiUrl = axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)
        .then(res => res.data.map(el => {
            return {
                id: el.id,
                name: el.name,
                heightMin: el.height.metric.split(' - ')[0],
                heightMax: el.height.metric.split(' - ')[1] ?
                    el.height.metric.split(' - ')[1] :
                    Math.round(el.height.metric.split(' - ')[0] * 1.1),
                weightMin: el.weight.metric.split(' - ')[0] !== "NaN" ?
                    el.weight.metric.split(' - ')[0] :
                    (el.weight.metric.split(' - ')[1] ?
                        Math.round(el.weight.metric.split(' - ')[1] * 0.6) :
                        '30'),//Math.round(el.weight.imperial.split(' - ')[1] * 0.6 / 2.205).toString()),
                weightMax: el.weight.metric.split(' - ')[1] ?
                    el.weight.metric.split(' - ')[1] :
                    '39',//Math.round(parseInt(el.weight.imperial.split(' - ')[1]) / 2.205).toString(),
                life_span: el.life_span,
                temperaments: el.temperament ? el.temperament : null,
                image: el.image.url,
            }
        }));
    return apiUrl
}

module.exports = {
    getApiInfo,
}