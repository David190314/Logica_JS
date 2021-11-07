function twoSums(numbs, target) {
    let parametro = 2
    let result = []
    for(let i= 0; i<numbs.length; i++){
        if(numbs[1] === numbs[0]){
            result.push(i)
        }else{
            let datos = numbs.slice(i,parametro+i)
                datos.reduce(function(a, b, i,v){
                if(a+b === target){
                    let array = v
                    array.forEach(element => {
                        result.push(numbs.lastIndexOf(element))
                    });           
                }
            })

        }
    }
    return result
}

module.exports = twoSums;