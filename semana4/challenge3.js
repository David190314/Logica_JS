function isSpecialArray (specialArr) {

  const pares = []
  const impares = []
  
  for ( let i = 0 ; i < specialArr.length; i ++){
    if(specialArr[i] % 2 === 0){
      pares.push(specialArr[i])
    }else{
      impares.push(specialArr[i])
    }
  }

  if(pares.length && impares.length % 2 ===  0){
    return true
  }else{
    return false
  }


}
isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3])

module.exports = isSpecialArray;