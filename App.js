var axios = require('axios');
module.exports = async (type) => {
var data = await axios.get(`https://v2.jokeapi.dev/joke/${type}?type=single`)
return data.data.joke
}