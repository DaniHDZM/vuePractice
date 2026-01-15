import axios from "axios";
import type { GIFResponse } from "../interfaces/git-response";

const apiKey = 'G02R1WyM0omqWazMNnJ4HOl9O6LplnKq'

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey,
    }
})

giphyApi.get<GIFResponse>('/random')
    .then(response => console.log(response.data.data.images.downsized_medium.url))
    .catch(err => console.log(err))