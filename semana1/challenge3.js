const capitalizeLetters = (str) => {
    return str.split(' ').map(v=>v[0].toUpperCase() + v.substr(1)).join(' ')
   
}

capitalizeLetters('hola mundo')

module.exports = {
    capitalizeLetters
}