function divisibleByLeft(n) {
    let parametro = 2
    let invertido = n.toString().split('').reverse().map((e)=> parseInt(e))
    let array = []
    for (let i = 0; i<invertido.length; i++)array.push(invertido.slice(i,parametro+i))
    let result =  array.reverse().map((e)=> e.length===1? false:e.reduce((a,b,i,v)=>a%b===0?true:false))

    return result
}
module.exports = divisibleByLeft;