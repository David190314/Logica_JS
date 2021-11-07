function arrayOfMultiples (num, length) {
  const maximo = num * length
  let array = []
  for(let i=num; i<=maximo; i+=num){
    array.push(i)
  }
  return array
}

module.exports = arrayOfMultiples;