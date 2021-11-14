function minMax(aNumbs) {    

    const result = aNumbs.sort((a,b)=>a-b)
    let newObject = {
            min: result[0],
            max: result[result.length-1]
    }
    return newObject
    
}

module.exports = minMax;
