import type { GIFResponse } from "../interfaces/git-response"

const apiKey = 'G02R1WyM0omqWazMNnJ4HOl9O6LplnKq'

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then( (response) => response.json())
    .then((body: GIFResponse) => console.log( body.data.images.downsized_still.url )) // los { body } sirve para desestructurar 
    .catch( (err) => console.log(err))