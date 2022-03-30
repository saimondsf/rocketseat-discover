let variable = false

const newPromisse = new Promise(( resolve, reject ) => {
    if(variable) {
        return resolve('Resolvido')
    } else {
        return reject('Rejeitado')
    }
})

newPromisse.then(result => console.log(result))
    .catch(err => console.log(err))
    .finally(() => {console.log('Finalizado')})
    

