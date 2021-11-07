const reverseString = (str) => {

    if(typeof str != 'string'){
        throw new Error('Error')
    }else if (str.length>15 || str.length <=1){
        throw new Error('Error') 
    }  
    return str.split('').reverse().join('')
    
    
}
module.exports = {
    reverseString
}