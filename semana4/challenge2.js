function isEqual(objInput1, objInput2) {
    return (JSON.stringify(objInput1) === JSON.stringify(objInput2))
}




isEqual({a: 1, b: 2},{a: 1, b: 2})

module.exports = isEqual;