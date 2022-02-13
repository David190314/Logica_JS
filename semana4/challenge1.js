function keysAndValues(objInput) {
    let array = []
    let arrayKeys= []
    let arrayValues = []
    for (property in objInput){
        if(objInput.hasOwnProperty(property)){
            array.push([property,objInput[property]])
        }
    }
    array.sort()
    for (let i=0; i<array.length; i++){
        arrayKeys.push(array[i][0])
        arrayValues.push(array[i][1])
    }
    return ([arrayKeys,arrayValues])
    
}    
keysAndValues({ b: "Microsoft", c: "Google", a: "Apple" })


module.exports = keysAndValues;

