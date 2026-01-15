const apiKey = 'G02R1WyM0omqWazMNnJ4HOl9O6LplnKq'

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then( response => response.json())
    .then(body => console.log({ body })) // los { body } sirve para desestructurar 
    .catch( err => console.log(err))