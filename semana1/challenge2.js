const reverseInt = (number) => {
    if(typeof number != 'number'){
        throw new Error('Error')
    }

    let numero = number.toString().split('').reverse().join('')
    if(numero[numero.length-1] ==='-'){
        return (parseInt(numero)*-1)
    }else{
       return  parseInt(numero)
    }

}

module.exports = {
    reverseInt
}