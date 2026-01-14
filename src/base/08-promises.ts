console.log('Inicio');

new Promise( ( resolve, reject ) => {
    setTimeout(() => {
        const ok = true;
        
        if (ok) {
            resolve('cumplio la promesa')
        } else {
            reject('No cumplio la promesa')
        }
    }, 1000);
})
.then((message) => console.log(message))
.catch( errorMessage => console.log(errorMessage))
.finally(() => console.log('Fin de la promesa'))

console.log('Fin');