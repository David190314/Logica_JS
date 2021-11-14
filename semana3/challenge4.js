function toArray() {
    let newArray = arguments[0]
    let finalArray = []
    for (property in newArray){
        if(newArray.hasOwnProperty(property)){
            finalArray.push([property,newArray[property]])
        }
    }

    return(finalArray)

}

module.exports = toArray;