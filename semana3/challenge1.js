function countPrimes(number) {

    let j = 2
    let array = []

    for(;j<number;j++){
        if(primo(j)){
            array.push(j)
        }
        
    }
    
    function primo(num){
        for (let i = 2; i<num; i++) {
            if (num % i === 0) {
                return false
            }else{
                
            }
        }
        return (num !==1)

    }

    return array.length
}





module.exports = countPrimes;