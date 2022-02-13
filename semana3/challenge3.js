function mcm (a, b) {

  let array = []  
  for(let i=1; i<=a*b ; i++){
    initial = i*a
    for(let f=1; f<=a*b; f++){
      let final = f*b
      if(final===initial){
        array.push(f*b)
        break    
      }
  
    }
  }
  return array[0]
}


module.exports = mcm;