import axios from 'axios'

const apiKey = '02acafbceb6ee853539268717f03f694'
const appId = 'b6da0fca'

export default axios.create({
    baseURL:'https://api.edamam.com/api/food-database/parser',
    params:{
        apiKey:apiKey,
        appId:appId
    }
})