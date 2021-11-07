function landMass() {
    const resul ={  
                "percent": parseFloat(((arguments[1]*100)/148940000).toFixed(2)),
                "message": `${arguments[0]} representa el ${parseFloat(((arguments[1]*100)/148940000).toFixed(2))}% de la masa de la tierra`
            }
    return resul
}

module.exports = landMass;